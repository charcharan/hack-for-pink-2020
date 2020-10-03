import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByHospitalComponent } from './near-by-hospital.component';

describe('NearByHospitalComponent', () => {
  let component: NearByHospitalComponent;
  let fixture: ComponentFixture<NearByHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearByHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
