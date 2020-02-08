import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragonBtnComponent } from './components/dragon-btn/dragon-btn.component';
import { DragonCardComponent } from './components/dragon-card/dragon-card.component';
import { DragonFormComponent } from './components/dragon-form/dragon-form.component';
import { DragonInputComponent } from './components/dragon-input/dragon-input.component';



@NgModule({
  declarations: [DragonCardComponent, DragonFormComponent, DragonInputComponent, DragonBtnComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [DragonInputComponent, DragonCardComponent, DragonFormComponent, DragonBtnComponent]
})
export class SharedModule { }
