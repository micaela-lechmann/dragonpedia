import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragon-home',
  templateUrl: './dragon-home.component.html',
  styleUrls: ['./dragon-home.component.scss']
})
export class DragonHomeComponent {

  constructor(private router: Router) { }

  public onClick(): void {
    this.router.navigate(['/dragon/register']);
  }
}
