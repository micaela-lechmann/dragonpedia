import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dragon } from '../../models/dragon.model';
import { faInfoCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss']
})
export class DragonCardComponent  {

  public readonly faEdit = faEdit;
  public readonly faTrashAlt = faTrashAlt;
  public readonly faInfoCircle = faInfoCircle;

  @Input()
  public dragon: Dragon;
  @Output()
  public editDragon = new EventEmitter();
  @Output()
  public deleteDragon = new EventEmitter();
  @Output()
  public detailDragon = new EventEmitter();
}
