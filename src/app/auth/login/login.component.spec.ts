import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let router: Router;

  class ComponentMock {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
        {path: 'dragon/home', component: ComponentMock}
      ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(('if form is invalid onLogin'), () => {
    it('should not call login function', () => {
      spyOn(service, 'login');

      component.onLogin();

      expect(service.login).not.toHaveBeenCalled();
    });
  });

  describe(('if form is valid onLogin'), () => {
    it('should set isCredentialsWrong to true and show error message if login is unsuccessful', (done) => {
      spyOn(service, 'login').and.returnValue(false);
      component.loginForm.setValue({ 'username': 'test', 'password': 'test' });

      component.onLogin();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const errorElement = fixture.nativeElement.querySelector('.alert-danger');
        expect(!!errorElement).toBeTruthy();
        expect(component.isCredentialsWrong).toBeTruthy();
        done();
      })
    });

    it('should set isCredentialsWrong to false and got to "dragon/home" if login is successful', (done) => {
      spyOn(service, 'login').and.returnValue(true);
      component.loginForm.setValue({ 'username': 'test', 'password': 'test' });

      component.onLogin();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.isCredentialsWrong).toBeFalsy();
        expect(router.url).toBe('/dragon/home');
        done();
      })
    });
  });
});
