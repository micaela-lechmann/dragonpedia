import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonHomeComponent } from './dragon-home.component';

describe('DragonHomeComponent', () => {
  let component: DragonHomeComponent;
  let fixture: ComponentFixture<DragonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
