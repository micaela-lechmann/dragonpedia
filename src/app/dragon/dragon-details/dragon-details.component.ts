import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  public dragon: Dragon;

  constructor(private dragonService: DragonService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDragonDetails();
  }

  private getDragonDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.dragonService.getDragon(id)
      .pipe(take(1))
      .subscribe(dragon => this.dragon = dragon);
  }

}
