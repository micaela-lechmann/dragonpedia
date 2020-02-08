import { Component, OnInit } from '@angular/core';
import { Dragon } from '../../shared/models/dragon.model';
import { DragonService } from '../../services/dragon.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { faFile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  public readonly faFolderOpen = faFile;
  public dragons: Dragon[] = [];
  public isLoadFinished = false;

  constructor(private dragonService: DragonService,
              private router: Router) { }

  ngOnInit() {
    this.setDragons();
  }

  public onDetailDragon(dragon: Dragon): void {
    this.router.navigate([`dragon/details/${dragon.id}`])
  }

  public onEditDragon(dragon: Dragon): void {
    this.router.navigate([`dragon/editor/${dragon.id}`])
  }

  public onDeleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon.id).subscribe(() => this.setDragons());
  }

  private setDragons(): void {
    this.dragonService.getDragons().pipe(take(1))
      .subscribe(dragons => {
        this.dragons = dragons.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else if(b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1
          }
          return 0;
        });
        this.isLoadFinished = true;
      });
  }

}
