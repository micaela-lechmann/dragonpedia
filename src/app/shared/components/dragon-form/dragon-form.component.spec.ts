import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonFormComponent } from './dragon-form.component';
import { SharedModule } from '../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragonBtnComponent } from '../dragon-btn/dragon-btn.component';
import { DragonInputComponent } from '../dragon-input/dragon-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { format } from 'url';
import { Dragon } from '../../models/dragon.model';

describe('DragonFormComponent', () => {
  let component: DragonFormComponent;
  let fixture: ComponentFixture<DragonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonFormComponent, DragonBtnComponent, DragonInputComponent ],
      imports: [
        ReactiveFormsModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(('dragonForm'), () => {
    it('should be empty if dragon does not exist', () => {
      component.ngOnInit();

      expect(component.dragonForm.get('name').value).toBe('');
      expect(component.dragonForm.get('type').value).toBe('');
    });

    it('should be filled by dragon info if it exists', () => {
      component.dragon = {
        histories: [],
        name: 'Test Dragon',
        type: 'Ice',
        createdAt: new Date(),
        id: '1'
      };
      component.ngOnInit();

      expect(component.dragonForm.get('name').value).toBe('Test Dragon');
      expect(component.dragonForm.get('type').value).toBe('Ice');
    });
  });

  describe('onClick', () => {
    it('should not emit submit if form is invalid', () => {
      spyOn(component.submit, 'emit');
      component.dragonForm.setValue({ 'name': '', 'type': ''});
      component.onClick();

      expect(component.submit.emit).not.toHaveBeenCalled();
    });

    it('should emit updated dragon values from form if dragon exists', () => {
      const expectedDragon: Dragon = {
        name: 'Test',
        type: 'Fire'
      };
      spyOn(component.submit, 'emit');
      component.dragonForm.setValue({ 'name': 'Test', 'type': 'Fire'});
      component.onClick();

      expect(component.submit.emit).toHaveBeenCalledWith(expectedDragon);
    });

    it('should emit updated dragon values from form if dragon exists', () => {
      component.dragon = {
        histories: [],
        name: 'Test Dragon',
        type: 'Ice',
        createdAt: new Date(),
        id: '1'
      };
      const expectedDragon: Dragon = {
        ...component.dragon,
        name: 'Test',
        type: 'Fire'
      };

      spyOn(component.submit, 'emit');
      component.dragonForm.setValue({ 'name': 'Test', 'type': 'Fire'});
      component.onClick();

      expect(component.submit.emit).toHaveBeenCalledWith(expectedDragon);
    });
  });
});
