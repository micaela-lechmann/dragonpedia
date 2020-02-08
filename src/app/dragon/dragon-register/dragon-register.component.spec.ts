import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonRegisterComponent } from './dragon-register.component';
import { DragonService } from 'src/app/services/dragon.service';
import { Router } from '@angular/router';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonListComponent } from '../dragon-list/dragon-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DragonRegisterComponent', () => {
  let component: DragonRegisterComponent;
  let fixture: ComponentFixture<DragonRegisterComponent>;
  let service: DragonService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragonRegisterComponent, DragonListComponent],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'dragon/list', component: DragonListComponent }
        ]),
        HttpClientTestingModule,
        FontAwesomeModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(DragonService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should call create method and redirect to list', (done) => {
      const newDragon: Dragon = {
        name: 'Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1',
        histories: []
      }
      const dragonObs = cold('--x|', {x: newDragon});

      spyOn(service, 'createDragon').and.returnValue(dragonObs);
      component.onSubmit(newDragon);
      getTestScheduler().flush();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(service.createDragon).toHaveBeenCalledWith(newDragon);
        expect(router.url).toBe('/dragon/list');
        done();
      });
    });
  });
});
