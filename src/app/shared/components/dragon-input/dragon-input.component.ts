import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dragon-input',
  templateUrl: './dragon-input.component.html',
  styleUrls: ['./dragon-input.component.scss']
})
export class DragonInputComponent {

  public readonly faExclamationTriangle =  faExclamationTriangle;

  @Input()
  control: FormControl;
  @Input()
  validatorsErrorMessages: { [error: string]: string }
  @Input()
  label: string;
  @Input()
  type: string;

  getErrorMessages() {
    const errorMessages = [];
    if (this.control.touched && this.control.errors) {
      const formErrors = Object.keys(this.control.errors);
      console.log(formErrors);
      console.log(this.validatorsErrorMessages);
      formErrors.map(error => {
        errorMessages.push(this.validatorsErrorMessages[error]);
      })
    }
    return errorMessages;
  }

}
