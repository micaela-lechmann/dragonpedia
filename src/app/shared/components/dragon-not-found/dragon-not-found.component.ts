import { Component } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dragon-not-found',
  templateUrl: './dragon-not-found.component.html',
  styleUrls: ['./dragon-not-found.component.scss']
})
export class DragonNotFoundComponent {

  public readonly faExclamationTriangle = faExclamationTriangle;
  
}
