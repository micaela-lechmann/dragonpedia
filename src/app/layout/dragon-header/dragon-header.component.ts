import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragon-header',
  templateUrl: './dragon-header.component.html',
  styleUrls: ['./dragon-header.component.scss']
})
export class DragonHeaderComponent {

  constructor(private authService: AuthService,
              private router: Router) { }

  public onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
