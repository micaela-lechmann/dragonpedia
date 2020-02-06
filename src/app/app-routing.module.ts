import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DragonContainerComponent } from './dragon/dragon-container/dragon-container.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
}, 
{
  path: 'dragon',
  loadChildren: './dragon/dragon.module#DragonModule'
}, 
{
  path: 'auth',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
