import { Component, OnInit } from '@angular/core';
import { Dragon } from '../../shared/models/dragon.model';
import { DragonService } from '../../services/dragon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dragon-editor',
  templateUrl: './dragon-editor.component.html',
  styleUrls: ['./dragon-editor.component.scss']
})
export class DragonEditorComponent implements OnInit {
  
  public dragon: Dragon;

  constructor(private dragonService: DragonService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit() {
    this.setDragonInfo();
  }

  public setDragonInfo(): void {
    //TODO check if all observables are closed
    const id = this.route.snapshot.params['id'];
    this.dragonService.getDragon(id).pipe(take(1))
      .subscribe(dragon => this.dragon = dragon);
  }

  public onSubmit(dragon: Dragon): void {
    this.dragonService.updateDragon(dragon.id, dragon)
    .pipe(take(1)).subscribe(() => {
      this.router.navigate(['/dragon/list']);
    });
  }

}
