import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DragonNotFoundComponent } from './shared/components/dragon-not-found/dragon-not-found.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'dragon/home',
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
},
{
  path: 'not-found',
  component: DragonNotFoundComponent
}, 
{
  path: '**',
  redirectTo: 'not-found',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
