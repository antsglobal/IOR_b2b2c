import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofrequencyComponent } from './radiofrequency.component';

describe('RadiofrequencyComponent', () => {
  let component: RadiofrequencyComponent;
  let fixture: ComponentFixture<RadiofrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiofrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiofrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
