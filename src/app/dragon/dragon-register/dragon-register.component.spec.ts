import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonRegisterComponent } from './dragon-register.component';

describe('DragonRegisterComponent', () => {
  let component: DragonRegisterComponent;
  let fixture: ComponentFixture<DragonRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
