import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './dragon-register/dragon-register.component';
import { DragonEditorComponent } from './dragon-editor/dragon-editor.component';
import { DragonContainerComponent } from './dragon-container/dragon-container.component';
import { DragonRoutingModule } from './dragon-routing.module';



@NgModule({
  declarations: [DragonListComponent, DragonRegisterComponent, DragonDetailsComponent, DragonEditorComponent, DragonContainerComponent],
  imports: [
    CommonModule,
    DragonRoutingModule
  ]
})
export class DragonModule { }
