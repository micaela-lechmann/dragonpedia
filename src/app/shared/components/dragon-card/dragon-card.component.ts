import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dragon } from '../../models/dragon.model';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss']
})
export class DragonCardComponent  {

  public readonly faEdit = faEdit;
  public readonly faTrashAlt = faTrashAlt;
  public readonly faInfoCircle = faInfoCircle;
  public modalRef: NgbModalRef;

  constructor(private ngbModal: NgbModal) {}

  @Input()
  public dragon: Dragon;
  @Output()
  public editDragon = new EventEmitter();
  @Output()
  public deleteDragon = new EventEmitter();
  @Output()
  public detailDragon = new EventEmitter();

  public openModal(deleteModal) {
    this.modalRef = this.ngbModal.open(deleteModal, {centered: true});
    this.modalRef.result.then((result) => { });
  }

  public onConfirmModal() {
    this.deleteDragon.emit(this.dragon);
    this.modalRef.close();
  }
}
