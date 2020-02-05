import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './dragon-register/dragon-register.component';
import { DragonEditorComponent } from './dragon-editor/dragon-editor.component';
import { DragonContainerComponent } from './dragon-container/dragon-container.component';



@NgModule({
  declarations: [DragonListComponent, DragonRegisterComponent, DragonDetailsComponent, DragonEditorComponent, DragonContainerComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DragonModule { }
