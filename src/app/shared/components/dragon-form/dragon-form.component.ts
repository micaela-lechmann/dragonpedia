import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Dragon } from '../../models/dragon.model';

@Component({
  selector: 'app-dragon-form',
  templateUrl: './dragon-form.component.html',
  styleUrls: ['./dragon-form.component.scss']
})
export class DragonFormComponent implements OnInit {

  @Input()
  public dragon: Dragon = {} as Dragon;
  @Output()
  public submit = new EventEmitter();
  public dragonForm: FormGroup;

  public nameErrorMessages = {
    "required": "Please, enter the dragon's name."
  };
  public typeErrorMessages = {
    "required": "Please, enter the dragon's type."
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dragonForm = this.fb.group({
      name: [this.dragon.name || '', [Validators.required]],
      type: [this.dragon.type || '', [Validators.required]],
    });
  }

  onClick(): void {
    if (this.dragonForm.invalid) {
      this.dragonForm.markAllAsTouched();
      return;
    }

    const dragon: Dragon = {
      ...this.dragon,
      name: this.dragonForm.get('name').value,
      type: this.dragonForm.get('type').value
    }
    
    this.submit.emit(dragon);
  }

}
