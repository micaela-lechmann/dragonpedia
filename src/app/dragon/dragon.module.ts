import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './dragon-register/dragon-register.component';
import { DragonEditorComponent } from './dragon-editor/dragon-editor.component';
import { DragonContainerComponent } from './dragon-container/dragon-container.component';
import { DragonRoutingModule } from './dragon-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { DragonHomeComponent } from './dragon-home/dragon-home.component';



@NgModule({
  declarations: [DragonListComponent, DragonRegisterComponent, DragonDetailsComponent, DragonEditorComponent, DragonContainerComponent, DragonHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DragonRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class DragonModule { }
