import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragonDetailsComponent } from '../dragon-details/dragon-details.component';
import { DragonEditorComponent } from '../dragon-editor/dragon-editor.component';
import { DragonListComponent } from './dragon-list.component';
import { DragonRegisterComponent } from '../dragon-register/dragon-register.component';


describe('DragonListComponent', () => {
  let component: DragonListComponent;
  let fixture: ComponentFixture<DragonListComponent>;
  let service: DragonService;
  let router: Router;
  const dragons: Dragon[] = [{
    histories: [],
    name: 'Ice Dragon',
    type: 'Ice',
    createdAt: new Date('2020-01-01'),
    id: '1'
  }, {
    histories: [],
    name: 'Fire Dragon',
    type: 'Fire',
    createdAt: new Date('2020-01-01'),
    id: '2'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonListComponent, DragonEditorComponent, DragonDetailsComponent, DragonRegisterComponent ],
      imports: [
        SharedModule,
        HttpClientTestingModule,  
        RouterTestingModule.withRoutes([
          { path: 'dragon/editor/:id', component: DragonEditorComponent },
          { path: 'dragon/details/:id', component: DragonDetailsComponent },
          { path: 'dragon/register', component: DragonRegisterComponent }
        ]),
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(DragonService);
    router = TestBed.get(Router);

    const dragonsObs = cold('--x|', {x: dragons});
    spyOn(service, 'getDragons').and.returnValue(dragonsObs);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(('setDragons'), () => {
    it('should get dragons from service, sort dragons alphabetically and set dragons list', () => {
      const sortedDragons: Dragon[] = [{
        histories: [],
        name: 'Fire Dragon',
        type: 'Fire',
        createdAt: new Date('2020-01-01'),
        id: '2'
      }, {
        histories: [],
        name: 'Ice Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1'
      }]

      component.ngOnInit();
      getTestScheduler().flush();

      expect(service.getDragons).toHaveBeenCalled();
      expect(component.dragons).toEqual(sortedDragons);
    });
  });

  describe('onDeleteDragon', () => {
    it('should call delete method with dragon id and then update dragons list', () => {
      const dragon: Dragon = {
        histories: [],
        name: 'Ice Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1'
      }
      const dragonObs = cold('--x|', {x: dragon});
      spyOn(service, 'deleteDragon').and.returnValue(dragonObs);
      
      component.onDeleteDragon(dragon);
      getTestScheduler().flush();

      expect(service.deleteDragon).toHaveBeenCalledWith('1');
      expect(service.getDragons).toHaveBeenCalled();
    });
  });

  describe('onEditDragon', () => {
    it('should navigate to editor page', (done) => {
      const dragon: Dragon = {
        histories: [],
        name: 'Ice Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1'
      }
      component.onEditDragon(dragon);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/editor/1');
        done();
      });
    });
  });

  describe('onDetailDragon', () => {
    it('should navigate to details page', (done) => {
      const dragon: Dragon = {
        histories: [],
        name: 'Ice Dragon',
        type: 'Ice',
        createdAt: new Date('2020-01-01'),
        id: '1'
      }
      component.onDetailDragon(dragon);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/details/1');
        done();
      });
    });
  });

  describe('on empty dragon list', () => {
    it('should show noDragons template', () => {
      component.dragons = [];
      component.isLoadFinished = true;
      fixture.detectChanges();

      const noDragons = fixture.nativeElement.querySelector('.no-dragons');
      expect(noDragons).toBeTruthy();
    });

    it('should navigate to register page noDragons template', (done) => {
      component.dragons = [];
      component.isLoadFinished = true;
      fixture.detectChanges();

      const noDragons = fixture.nativeElement.querySelector('.no-dragons__subtitle');
      noDragons.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/register');
        done();
      });
    });
  });
});
