# SWAApp - Dashboard for viewing statistics from various body sensors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19. It shows data from various body sensors in statistical format.

In this dashboard we are showing reading from 3 diffenert sensors:
1. Blood Pressure Sensor
2. Ear Temperature Sensor
3. Blood Sugar Sensor

We can implement for more sensors in the same way as per our needs.

Edge node downloads sensors data all day in intervals. As soon as the sensor data file is updated, statistics gets updates as per the new file data. 

This helps user in viewing the data with graphs and even shows alerts if the reading don't lie in normal range.

## How to setup the application

  ### Install Dependencies

    'npm install' will install all the node moudles dependencies specified in package.json.

  ### Development server

    Run `ng serve --live-reload false` for a dev server. Navigate to `http://localhost:4200/`. The app will not automatically     reload if you change any of the source files.

