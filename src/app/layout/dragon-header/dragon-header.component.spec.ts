import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragonHeaderComponent } from './dragon-header.component';

class ComponentMock {}

describe('DragonHeaderComponent', () => {
  let component: DragonHeaderComponent;
  let fixture: ComponentFixture<DragonHeaderComponent>;
  let router: Router;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonHeaderComponent ],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([
          {path: 'dragon/home', component: ComponentMock},
          {path: 'dragon/register', component: ComponentMock},
          {path: 'dragon/list', component: ComponentMock},
          {path: 'login', component: ComponentMock}
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    service = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(('click on logo'), () => {
    it('should redirect to home page', (done) => {
      const logo = fixture.nativeElement.querySelector('.header__logo');
      logo.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/home');
        done();
      });
    });
  });

  describe(('click on list link'), () => {
    it('should redirect to list page', (done) => {
      const list = fixture.nativeElement.querySelector('#list-route');
      list.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/list');
        done();
      });
    });
  });

  describe(('click on register link'), () => {
    it('should redirect to register page', (done) => {
      const register = fixture.nativeElement.querySelector('#register-route');
      register.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/register');
        done();
      });
    });
  });

  describe(('on logout'), () => {
    it('should logout and redirect to login page', (done) => {
      spyOn(service, 'logout');
      component.onLogout();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(service.logout).toHaveBeenCalled();
        expect(router.url).toBe('/login');
        done();
      });
    });
  });
});
