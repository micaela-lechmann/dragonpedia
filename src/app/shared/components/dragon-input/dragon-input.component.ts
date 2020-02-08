import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
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
  public control: FormControl;
  @Input()
  public validatorsErrorMessages: { [error: string]: string }
  @Input()
  public label: string;
  @Input()
  public type: string;

  public getErrorMessages(): string[] {
    const errorMessages = [];
    if (this.control.touched && this.control.errors) {
      const formErrors = Object.keys(this.control.errors);
      formErrors.map(error => {
        errorMessages.push(this.validatorsErrorMessages[error]);
      })
    }
    return errorMessages;
  }

}
