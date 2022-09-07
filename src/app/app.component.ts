import { Component } from '@angular/core';

import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: any;
  selectedTheme = 'Light';
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.options = {
      series: [
        {
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        foreColor: '#434469',
        fontFamily: 'Noto Sans',
      },
      theme: {
        mode: 'light',
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        title: {
          text: 'Points',
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        fillSeriesColor: ['#434469'],
      },
      grid: {
        show: false,
      },
    };
    this.initChart(this.options);
  }
  chart: any;

  initChart(options: any) {
    this.chart = new ApexCharts(document.querySelector('#chart'), options);
    this.chart.render();
  }

  switchTheme(ev: any) {
    console.log(ev.target.checked);
    if (ev.target.checked) {
      document.body.classList.add('dark-theme');
      this.selectedTheme = 'Dark';
      this.chart.updateOptions({
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          foreColor: '#ececff',
        },
      });
    } else {
      document.body.classList.remove('dark-theme');
      this.selectedTheme = 'Light';
      this.chart.updateOptions({
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          foreColor: '#434469',
        },
      });
    }
  }
}
