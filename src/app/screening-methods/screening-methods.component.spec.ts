import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningMethodsComponent } from './screening-methods.component';

describe('ScreeningMethodsComponent', () => {
  let component: ScreeningMethodsComponent;
  let fixture: ComponentFixture<ScreeningMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
