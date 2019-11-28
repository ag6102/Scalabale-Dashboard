import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpSensorDataViewComponent } from './bp-sensor-data-view.component';

describe('BpSensorDataViewComponent', () => {
  let component: BpSensorDataViewComponent;
  let fixture: ComponentFixture<BpSensorDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpSensorDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpSensorDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
