import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { DragonDetailsComponent } from './dragon-details.component';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DragonDetailsComponent', () => {
  let component: DragonDetailsComponent;
  let fixture: ComponentFixture<DragonDetailsComponent>;
  let service: DragonService;
  
  const dragonMock: Dragon = {
    name: 'Dragon',
    type: 'Fire',
    createdAt: new Date(),
    id: '1',
    histories: []
  }
  const routeMock = { snapshot: {params: { id: '1' }}}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [ { provide: ActivatedRoute, useValue: routeMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(DragonService);
    
    const dragonObs = cold('--x|', {x: dragonMock})
    spyOn(service, 'getDragon').and.returnValue(dragonObs);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return dragon according to id', () => {
    component.ngOnInit();
    getTestScheduler().flush();
    
    expect(service.getDragon).toHaveBeenCalledWith('1');
    expect(component.dragon).toBe(dragonMock);
  });
});
