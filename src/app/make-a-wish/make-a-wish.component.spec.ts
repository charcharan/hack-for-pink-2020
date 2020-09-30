import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAWishComponent } from './make-a-wish.component';

describe('MakeAWishComponent', () => {
  let component: MakeAWishComponent;
  let fixture: ComponentFixture<MakeAWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
