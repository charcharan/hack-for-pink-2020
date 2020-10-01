import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionDialogComponent } from './emotion-dialog.component';

describe('EmotionDialogComponent', () => {
  let component: EmotionDialogComponent;
  let fixture: ComponentFixture<EmotionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
