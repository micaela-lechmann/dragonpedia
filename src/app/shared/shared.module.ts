import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonCardComponent } from './components/dragon-card/dragon-card.component';
import { DragonFormComponent } from './components/dragon-form/dragon-form.component';



@NgModule({
  declarations: [DragonCardComponent, DragonFormComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
