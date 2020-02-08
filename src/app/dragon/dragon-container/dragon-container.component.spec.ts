import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonContainerComponent } from './dragon-container.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DragonContainerComponent', () => {
  let component: DragonContainerComponent;
  let fixture: ComponentFixture<DragonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonContainerComponent ],
      imports: [
        LayoutModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
