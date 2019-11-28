import { Component, OnInit } from '@angular/core';
import config from '../../../assets/json/config.json';
import sensorData from '../../../assets/json/sensor_data.json';
import { HttpClient }    from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formattedJson = {};
  configJson = config;
  bpData;
  tempData;
  glucoseData;
  id;
  sensorFileData;
  lastUser;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sensorFileData = sensorData;
    this.initialize();
    this.id = setInterval(() => {
      this.initialize(); 
    }, 5000);
  }

  initialize(){
    this.fetchJSON();
    this.processJsonData();
    this.populateFormattedJson();
  }

  fetchJSON(){
    this.http.get('assets/json/sensor_data.json',{ responseType: 'json'}).subscribe(data => {
      if(!_.isEqual(this.sensorFileData, data)){
        this.sensorFileData = data;
      }
    });
  }

  processJsonData(){
    let sdata = this.sensorFileData;
    let pIdKeys = Object.keys(sdata);
    for(let pId=0; pId<pIdKeys.length; pId++){
      this.formattedJson[pIdKeys[pId]] = {};
      let data = sdata[pIdKeys[pId]];
      let keys = Object.keys(data);
      for(let i=0; i<keys.length; i++){
        for(let i=0; i<keys.length; i++){
          let key = keys[i];
          if(config[key]){
            let sensorType = config[key].type;
            this.formattedJson[pIdKeys[pId]][sensorType] = data[key];
          }
        }
      }
    }
  }

  populateFormattedJson(){
    if(this.lastUser){
      this.bpData =  this.formattedJson[this.lastUser]['Blood Pressure'];
      this.tempData =  this.formattedJson[this.lastUser]['Ear Temperature'];
      this.glucoseData =  this.formattedJson[this.lastUser]['Glucose monitor'];
    }
  }

  changeUser(value){
    this.lastUser = value;
    this.initialize()
  }

}
