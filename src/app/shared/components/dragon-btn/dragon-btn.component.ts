import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dragon-btn',
  templateUrl: './dragon-btn.component.html',
  styleUrls: ['./dragon-btn.component.scss']
})
export class DragonBtnComponent {

  @Input()
  public content: string;
  @Output()
  public clickBtn = new EventEmitter();

}
