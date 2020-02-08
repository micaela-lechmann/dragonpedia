import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragonInputComponent } from './dragon-input.component';


describe('DragonInputComponent', () => {
  let component: DragonInputComponent;
  let fixture: ComponentFixture<DragonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragonInputComponent],
      imports: [
        FontAwesomeModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonInputComponent);
    component = fixture.componentInstance;
    
    component.control = new FormControl();

    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(('getErrorMessages'), () => {
    it('should return required error message', () => {
      component.control = new FormControl('', Validators.required);
      component.validatorsErrorMessages = {
        "required": "This field is required"
      };
      component.control.setValue('');
      component.control.markAsTouched();
      fixture.detectChanges();

      expect(component.getErrorMessages()).toEqual(['This field is required']);
    });

    it('should return email and minlength error messages', () => {
      component.control = new FormControl('', [Validators.minLength(3), Validators.email]);
      component.validatorsErrorMessages = {
        "minlength": "The minumum length for this field is 3 caracters",
        "email": "Please, enter a valid e-mail"
      };
      component.control.setValue('aa');
      component.control.markAsTouched();

      expect(component.getErrorMessages())
        .toEqual(["The minumum length for this field is 3 caracters", "Please, enter a valid e-mail"]);
    });

    it('should return none error messages', () => {
      component.control = new FormControl('', Validators.required)
      component.validatorsErrorMessages = {
        "required": "This field is required"
      };
      component.control.setValue('Test');
      component.control.markAsTouched();

      expect(component.getErrorMessages()).toEqual([]);
    });
  });
});
