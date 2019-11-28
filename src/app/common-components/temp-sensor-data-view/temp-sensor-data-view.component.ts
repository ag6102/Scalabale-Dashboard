import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-temp-sensor-data-view',
  templateUrl: './temp-sensor-data-view.component.html',
  styleUrls: ['./temp-sensor-data-view.component.css']
})
export class TempSensorDataViewComponent implements OnInit {

  @Input() tempData;
  latestData;

  constructor() { }

  ngOnInit() {
    let sorted = _.sortBy(this.tempData, 'timestamp').reverse();
    this.latestData = JSON.parse(JSON.stringify(sorted[0]));
    let dateObj = new Date(this.latestData['timestamp'] * 1000); 
    let utcString = dateObj.toUTCString(); 
    this.latestData['timestamp'] = utcString;
    sorted = _.sortBy(this.tempData, 'timestamp');
    let chartData = {
      data : [],
      time : []
    };
    this.tempData = sorted;
    _.forEach(this.tempData, function(value, key) {
      let dateObj = new Date(value.timestamp * 1000); 
      let utcString = dateObj.toUTCString(); 
      let time = utcString.slice(-11, -4); 
      chartData['time'].push(time);
    });
    _.forEach(this.tempData, function(value, key) {
      chartData['data'].push(value.data);
    });
    var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = canvas.getContext('2d');
    var data = {
        labels: chartData['time'],
        datasets: [{
            label: 'Temp in deg Celcius',
            data: chartData['data'],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
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
