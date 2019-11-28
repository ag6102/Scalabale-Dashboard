import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseSensorDataViewComponent } from './glucose-sensor-data-view.component';

describe('GlucoseSensorDataViewComponent', () => {
  let component: GlucoseSensorDataViewComponent;
  let fixture: ComponentFixture<GlucoseSensorDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucoseSensorDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseSensorDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
