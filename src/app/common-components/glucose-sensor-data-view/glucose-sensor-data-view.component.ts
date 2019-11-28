import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-glucose-sensor-data-view',
  templateUrl: './glucose-sensor-data-view.component.html',
  styleUrls: ['./glucose-sensor-data-view.component.css']
})
export class GlucoseSensorDataViewComponent implements OnInit {

  @Input() glucoseData;
  latestData;

  constructor() { }

  ngOnInit() {
    let sorted = _.sortBy(this.glucoseData, 'timestamp').reverse();
    this.latestData = JSON.parse(JSON.stringify(sorted[0]));
    let dateObj = new Date(this.latestData['timestamp'] * 1000); 
    let utcString = dateObj.toUTCString(); 
    this.latestData['timestamp'] = utcString;
    sorted = _.sortBy(this.glucoseData, 'timestamp');
    this.glucoseData = sorted;
    let chartData = {
      data : [],
      time : []
    };
    _.forEach(this.glucoseData, function(value, key) {
      let dateObj = new Date(value.timestamp * 1000); 
      let utcString = dateObj.toUTCString(); 
      let time = utcString.slice(-11, -4); 
      chartData['time'].push(time);
    });
    _.forEach(this.glucoseData, function(value, key) {
      chartData['data'].push(value.data);
    });
    var canvas = <HTMLCanvasElement> document.getElementById("glucoseCanvas");
    var ctx = canvas.getContext('2d');
    var data = {
        labels: chartData['time'],
        datasets: [{
            label: 'Blood Sugar in mg/dL',
            data: chartData['data'],
            backgroundColor: [
              '#c0eef1a8'
            ],
            borderColor: [
              '#7cbfbf'
            ],
            borderWidth: 1
        }]
    };
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: null
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

}
