import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSharingComponent } from './image-sharing.component';

describe('ImageSharingComponent', () => {
  let component: ImageSharingComponent;
  let fixture: ComponentFixture<ImageSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
