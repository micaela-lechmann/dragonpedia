import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonEditorComponent } from './dragon-editor.component';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonListComponent } from '../dragon-list/dragon-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DragonEditorComponent', () => {
  let component: DragonEditorComponent;
  let fixture: ComponentFixture<DragonEditorComponent>;
  let service: DragonService;
  let router: Router;

  const dragonMock: Dragon = {
    name: 'Dragon',
    type: 'Ice',
    createdAt: new Date('2020-01-01'),
    id: '2',
    histories: []
  }
  const routeMock = { snapshot: { params: { id: '2' } } }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragonEditorComponent, DragonListComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'dragon/list', component: DragonListComponent }
        ])
      ],
      providers: [{ provide: ActivatedRoute, useValue: routeMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(DragonService);
    router = TestBed.get(Router);

    const dragonObs = cold('--x|', { x: dragonMock })
    spyOn(service, 'getDragon').and.returnValue(dragonObs);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setDragonInfo', () => {
    it('should set dragon according to url id', () => {
      component.ngOnInit();
      getTestScheduler().flush();

      expect(service.getDragon).toHaveBeenCalledWith('2');
      expect(component.dragon).toBe(dragonMock);
    });
  });

  describe('onSubmit', () => {
    it('should call update method and redirect to list', (done) => {
      const updatedDragon: Dragon = {
        name: 'Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1',
        histories: []
      }
      const dragonObs = cold('--x|', {x: updatedDragon});

      spyOn(service, 'updateDragon').and.returnValue(dragonObs);
      component.onSubmit(updatedDragon);
      getTestScheduler().flush();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(service.updateDragon).toHaveBeenCalledWith('1', updatedDragon);
        expect(router.url).toBe('/dragon/list');
        done();
      });
    });
  });
});
