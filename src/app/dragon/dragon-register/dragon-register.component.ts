import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dragon-register',
  templateUrl: './dragon-register.component.html',
  styleUrls: ['./dragon-register.component.scss']
})
export class DragonRegisterComponent {

  constructor(private dragonService: DragonService,
    private router: Router) { }

  public onSubmit(dragon: Dragon): void {
    this.dragonService.createDragon(dragon)
      .pipe(take(1)).subscribe(() => {
      this.router.navigate(['/dragon/list']);
    });
  }

}
