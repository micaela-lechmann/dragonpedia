import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonEditorComponent } from './dragon-editor.component';

describe('DragonEditorComponent', () => {
  let component: DragonEditorComponent;
  let fixture: ComponentFixture<DragonEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
