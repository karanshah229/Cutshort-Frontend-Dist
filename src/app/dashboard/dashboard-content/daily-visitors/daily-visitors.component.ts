import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-daily-visitors',
  templateUrl: './daily-visitors.component.html',
  styleUrls: ['./daily-visitors.component.scss'],
})
export class DailyVisitorsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
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
          position: 'right',
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            beginAtZero: false,
            stepSize: 30,
            max: 90,
            min: 0,
          },
        },
      ],
    },
  };
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    {
      barThickness: 16,
      barPercentage: 0.5,
      data: [
        65,
        59,
        80,
        81,
        56,
        5,
        59,
        80,
        81,
        56,
        55,
        40,
        30,
        55,
        40,
        30,
        5,
        59,
        80,
        81,
        56,
      ],
      label: 'Growth',
    },
  ];
  public barChartColors: Color[] = [
    {
      // dodgerblue
      backgroundColor: 'rgba(13, 88, 217,1)',
      borderColor: 'rgba(13, 88, 217,1)',
    },
  ];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void {}
}
