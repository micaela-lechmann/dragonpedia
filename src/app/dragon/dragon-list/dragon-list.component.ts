import { Component, OnInit } from '@angular/core';
import { Dragon } from '../../shared/models/dragon.model';
import { DragonService } from '../../services/dragon.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  public dragons: Dragon[] = [];

  constructor(private dragonService: DragonService,
              private router: Router) { }

  ngOnInit() {
    this.setDragons();
  }

  public onDetailDragon(dragon: Dragon) {
    this.router.navigate([`dragon/details/${dragon.id}`])
  }

  public onEditDragon(dragon: Dragon) {
    this.router.navigate([`dragon/editor/${dragon.id}`])
  }

  public onDeleteDragon(dragon: Dragon) {
    console.log(dragon);
    this.dragonService.deleteDragon(dragon.id).subscribe(() => this.setDragons());
  }

  private setDragons(): void {
    this.dragonService.getDragons().pipe(take(1))
      .subscribe(dragons => {
        this.dragons = dragons.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if(b.name > a.name) {
            return -1
          }
          return 0;
        });
      });
  }

}
