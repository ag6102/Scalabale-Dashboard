import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bp-sensor-data-view',
  templateUrl: './bp-sensor-data-view.component.html',
  styleUrls: ['./bp-sensor-data-view.component.css']
})
export class BpSensorDataViewComponent implements OnInit {

  @Input() bpData: Object;
  bpDataAnalyzer = [];
  latestData;

  constructor() { }

  ngOnInit() {
    this.bpDataAnalyzer = [
      {
        systolic : [0,119],
        diastolic : [0,79],
        type : 'Normal',
        message : '',
        class: 'blue'
      },
      {
        systolic : [120,129],
        diastolic : [0,79],
        type : 'Elevated',
        message : '',
        class: 'lemon-yellow'
      },
      {
        systolic : [130,139],
        diastolic : [80,89],
        type : 'High Blood Pressure(Stage 1)',
        message : '',
        class: 'yellow'
      },
      {
        systolic : [140,180],
        diastolic : [90,120],
        type : 'High Blood Pressure(Stage 2)',
        message : '',
        class: 'orange'
      },
      {
        systolic : [181],
        diastolic : [121],
        type : 'Hypersensitive Crisis',
        message : 'Consult your doctor immediately',
        class: 'red'
      }
    ]
    
    let sorted = _.sortBy(this.bpData, 'timestamp').reverse();
    this.latestData = JSON.parse(JSON.stringify(sorted[0]));
    let dateObj = new Date(this.latestData['timestamp'] * 1000); 
    let utcString = dateObj.toUTCString(); 
    this.latestData['timestamp'] = utcString;
    let bpData = this.latestData['data'];
    
    for(var i=0; i< this.bpDataAnalyzer.length; i++){
      let d = this.bpDataAnalyzer[i];
      if(bpData.systolic >= d['systolic'][0] && 
        (d['systolic'][1] && d['systolic'][1]>=bpData.systolic ) && 
        bpData.diastolic >= d['diastolic'][0] && 
        (d['diastolic'][1] && d['diastolic'][1] >= bpData.diastolic)){
          this.latestData['analysedType'] = d.type;
          this.latestData['message'] = d.message;
          this.latestData['class'] = d.class;
          break;
      }
      if(bpData.systolic >= d['systolic'][0] && 
        (d['systolic'][1] && d['systolic'][1]>=bpData.systolic ) || 
        bpData.diastolic > d['diastolic'][0] && 
        (d['diastolic'][1] && d['diastolic'][1] >= bpData.diastolic)){
          this.latestData['analysedType'] = d.type;
          this.latestData['message'] = d.message;
          this.latestData['class'] = d.class;
          break;
      }
      if((d['systolic'].length == 1 && (bpData.systolic >= d['systolic'][0] || 
        bpData.diastolic > d['diastolic'][0])) || 
        (d['systolic'].length == 1 && (bpData.systolic >= d['systolic'][0] && 
        bpData.diastolic >= d['diastolic'][0]))){
          this.latestData['analysedType'] = d.type;
          this.latestData['message'] = d.message;
          this.latestData['class'] = d.class;
          break;
        }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

}
