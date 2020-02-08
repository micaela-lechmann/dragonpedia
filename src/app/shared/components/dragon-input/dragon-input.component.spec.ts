import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonInputComponent } from './dragon-input.component';

describe('DragonInputComponent', () => {
  let component: DragonInputComponent;
  let fixture: ComponentFixture<DragonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO popular error messages e snapshots
});
