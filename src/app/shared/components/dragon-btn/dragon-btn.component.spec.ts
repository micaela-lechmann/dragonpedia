import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBtnComponent } from './dragon-btn.component';

describe('DragonBtnComponent', () => {
  let component: DragonBtnComponent;
  let fixture: ComponentFixture<DragonBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
