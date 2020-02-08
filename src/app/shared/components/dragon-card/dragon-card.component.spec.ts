import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCardComponent } from './dragon-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragonBtnComponent } from '../dragon-btn/dragon-btn.component';

describe('DragonCardComponent', () => {
  let component: DragonCardComponent;
  let fixture: ComponentFixture<DragonCardComponent>;
  let ngbModal: NgbModal;
  const dragon = {
    histories: [],
    name: 'Test Dragon',
    type: 'Ice',
    createdAt: new Date('2020-01-01'),
    id: '1'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCardComponent, DragonBtnComponent ],
      imports: [ 
        FontAwesomeModule, 
        NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.dragon = dragon;
    fixture.detectChanges();

    ngbModal = TestBed.get(NgbModal);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on info click', () => {
    it('should trigger detail emitter', () => {
      spyOn(component.detailDragon, 'emit');
      const infoIcon = fixture.nativeElement.querySelector('.card__info');
      infoIcon.click();

      expect(component.detailDragon.emit).toHaveBeenCalledWith(dragon);
    });
  });

  describe('on edit click', () => {
    it('should trigger edit emitter', () => {
      spyOn(component.editDragon, 'emit');
      const editIcon = fixture.nativeElement.querySelector('.card__edit');
      editIcon.click();

      expect(component.editDragon.emit).toHaveBeenCalledWith(dragon);
    });
  });

  describe('on delete click', () => {
    beforeEach(() => {
      const modalRef = ngbModal.open('test');
      spyOn(ngbModal,  'open').and.returnValue(modalRef);
    });

    it('should open modal', () => {
      const deleteIcon = fixture.nativeElement.querySelector('.card__delete');
      deleteIcon.click();

      expect(ngbModal.open).toHaveBeenCalled();
    });
  });

  describe('onConfirmModal', () => {
    it('should emit deleteDragon', () => {
      spyOn(component.deleteDragon, 'emit');
      component.openModal('test');
      component.onConfirmModal();

      expect(component.deleteDragon.emit).toHaveBeenCalledWith(dragon);
    });
  })
});
