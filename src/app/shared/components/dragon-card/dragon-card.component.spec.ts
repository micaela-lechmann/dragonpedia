import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCardComponent } from './dragon-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DragonCardComponent', () => {
  let component: DragonCardComponent;
  let fixture: ComponentFixture<DragonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCardComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.dragon = {
      histories: [],
      name: 'Test Dragon',
      type: 'Ice',
      createdAt: new Date(),
      id: '1'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on info click', () => {
    it('should trigger detail emitter', () => {
      spyOn(component.detailDragon, 'emit');
      const infoIcon = fixture.nativeElement.querySelector('.card__info');
      infoIcon.click();

      expect(component.detailDragon.emit).toHaveBeenCalled();
    });
  });

  describe('on edit click', () => {
    it('should trigger edit emitter', () => {
      spyOn(component.editDragon, 'emit');
      const editIcon = fixture.nativeElement.querySelector('.card__edit');
      editIcon.click();

      expect(component.editDragon.emit).toHaveBeenCalled();
    });
  });

  describe('on delete click', () => {
    it('should trigger detail emitter', () => {
      spyOn(component.deleteDragon, 'emit');
      const deleteIcon = fixture.nativeElement.querySelector('.card__delete');
      deleteIcon.click();

      expect(component.deleteDragon.emit).toHaveBeenCalled();
    });
  });
});
