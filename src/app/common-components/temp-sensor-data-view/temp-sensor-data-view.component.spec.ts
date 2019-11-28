import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSensorDataViewComponent } from './temp-sensor-data-view.component';

describe('TempSensorDataViewComponent', () => {
  let component: TempSensorDataViewComponent;
  let fixture: ComponentFixture<TempSensorDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSensorDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSensorDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
