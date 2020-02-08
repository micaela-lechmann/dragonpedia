import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonNotFoundComponent } from './dragon-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DragonNotFoundComponent', () => {
  let component: DragonNotFoundComponent;
  let fixture: ComponentFixture<DragonNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonNotFoundComponent ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
