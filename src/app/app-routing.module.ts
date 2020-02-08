import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [{
  path: '',
  redirectTo: 'dragon',
  pathMatch: 'full'
}, 
{
  path: 'dragon',
  loadChildren: './dragon/dragon.module#DragonModule',
  canActivate: [AuthGuardService]
}, 
{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
