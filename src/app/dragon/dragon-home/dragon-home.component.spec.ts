import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonHomeComponent } from './dragon-home.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonRegisterComponent } from '../dragon-register/dragon-register.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DragonHomeComponent', () => {
  let component: DragonHomeComponent;
  let fixture: ComponentFixture<DragonHomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonHomeComponent, DragonRegisterComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dragon/register', component: DragonRegisterComponent }
        ]),
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {
    it('should redirect to register page', (done) => {
      component.onClick();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(router.url).toBe('/dragon/register');
        done();
      });
    });
  });
});
