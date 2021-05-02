import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  data: any[] = [
    {
      link: '/store/',
      visitors: '4,890',
      unique_page_visits: '3,985',
      bounce_rate: '81.56%',
    },
    {
      link: '/store/symbols-styleguides',
      visitors: '3,785',
      unique_page_visits: '3,182',
      bounce_rate: '62.56%',
    },
    {
      link: '/store/dashboard-ui-kit',
      visitors: '2,985',
      unique_page_visits: '2,115',
      bounce_rate: '8.76%',
    },
    {
      link: '/store/webflow-cards.html',
      visitors: '2,440',
      unique_page_visits: '1,789',
      bounce_rate: '79.59%',
    },
  ];

  data2: any[] = [
    {
      network: 'Instagram',
      visitors: 3550,
    },
    {
      network: 'Facebook',
      visitors: 2236,
    },
    {
      network: 'Twitter',
      visitors: 1795,
    },
    {
      network: 'Linkedin',
      visitors: 620,
    },
  ];

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
