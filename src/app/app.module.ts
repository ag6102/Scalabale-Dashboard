import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpSensorDataViewComponent } from './common-components/bp-sensor-data-view/bp-sensor-data-view.component';
import { DashboardComponent } from './screen/dashboard/dashboard.component';
import { TempSensorDataViewComponent } from './common-components/temp-sensor-data-view/temp-sensor-data-view.component';
import { GlucoseSensorDataViewComponent } from './common-components/glucose-sensor-data-view/glucose-sensor-data-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BpSensorDataViewComponent,
    DashboardComponent,
    TempSensorDataViewComponent,
    GlucoseSensorDataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
