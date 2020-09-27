import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSuccessDialogComponent } from './sign-up-success-dialog.component';

describe('SignUpSuccessDialogComponent', () => {
  let component: SignUpSuccessDialogComponent;
  let fixture: ComponentFixture<SignUpSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
