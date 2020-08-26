import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  results: any[] = [
    {
      name: 'Game 1',
      value: 100,
    },
    {
      name: 'Game 2',
      value: 288,
    },
    {
      name: 'Game 3',
      value: 50,
    },
    {
      name: 'Game 4',
      value: 70,
    },
  ];

  // Options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }
}
