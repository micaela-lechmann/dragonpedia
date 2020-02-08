import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragonHeaderComponent } from './dragon-header/dragon-header.component';



@NgModule({
  declarations: [DragonHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [DragonHeaderComponent]
})
export class LayoutModule { }
