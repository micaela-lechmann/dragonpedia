import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './dragon-register/dragon-register.component';


const routes: Routes = [
  {
    path: 'list',
    component: DragonListComponent
  },
  { 
    path: 'register',
    component: DragonRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }