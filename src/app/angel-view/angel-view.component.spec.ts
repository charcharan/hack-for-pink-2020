import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelViewComponent } from './angel-view.component';

describe('AngelViewComponent', () => {
  let component: AngelViewComponent;
  let fixture: ComponentFixture<AngelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
