import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './dragon-register/dragon-register.component';
import { DragonContainerComponent } from './dragon-container/dragon-container.component';
import { DragonEditorComponent } from './dragon-editor/dragon-editor.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';


const routes: Routes = [
  {
    path: '',
    component: DragonContainerComponent,
    children: [
      { 
        path: 'register',
        component: DragonRegisterComponent
      }, {
        path: 'list',
        component: DragonListComponent
      },
      { 
        path: 'editor/:id',
        component: DragonEditorComponent
      },
      { 
        path: 'details/:id',
        component: DragonDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }