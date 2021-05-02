import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
})
export class LineChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lineChartData1: ChartDataSets[] = [
    {
      data: [25, 59, 32, 55, 40, 65, 59, 80, 81, 56, 55, 4, 80, 81, 90],
      label: '',
    },
  ];
  lineChartData2: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
      label: '',
    },
  ];
  lineChartData3: ChartDataSets[] = [
    {
      data: [65, 40, 65, 59, 80, 81, 59, 80, 56, 55, 81, 56, 55, 40],
      label: '',
    },
  ];
  lineChartData4: ChartDataSets[] = [
    {
      data: [65, 81, 56, 55, 40, 65, 59, 80, 59, 80, 81, 56, 55, 40],
      label: '',
    },
  ];
  lineChartData: any[] = [
    this.lineChartData1,
    this.lineChartData2,
    this.lineChartData3,
    this.lineChartData4,
  ];
  otherData: any[] = [
    {
      title: 'Real Time Users',
      number: '56',
      percent: '12.8%',
    },
    {
      title: 'Total Visits',
      number: '54,598',
      percent: '-19.98%',
    },
    {
      title: 'Bounce Rate',
      number: '13.67%',
      percent: '-82.5%',
    },
    {
      title: 'Visit Duration',
      number: '1m 4s',
      percent: '19.98%',
    },
  ];

  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  lineChartColors: Color[][] = [
    [
      {
        // blue
        backgroundColor: 'rgba(13, 88, 217,0.3)',
        borderColor: 'rgba(13, 88, 217,1)',
        pointBackgroundColor: 'rgba(13, 88, 217,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(13, 88, 217,1)',
      },
    ],
    [
      {
        // green
        backgroundColor: 'rgba(53,173,73,0.3)',
        borderColor: 'rgba(53,173,73,1)',
        pointBackgroundColor: 'rgba(53,173,73,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(53,173,73,1)',
      },
    ],
    [
      {
        // purple
        backgroundColor: 'rgba(132,120,246,0.3)',
        borderColor: 'rgba(132,120,246,1)',
        pointBackgroundColor: 'rgba(132,120,246,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(132,120,246,1)',
      },
    ],
    [
      {
        // yellow
        backgroundColor: 'rgba(251,216,113,0.3)',
        borderColor: 'rgba(251,216,113,1)',
        pointBackgroundColor: 'rgba(251,216,113,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(251,216,113,1)',
      },
    ],
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
}
