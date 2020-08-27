import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnDestroy {
  interval: any;

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

  constructor() {
    // NgxCharts needs a new object to refresh the information, acordding to its documentation
    const newResults = [...this.results];

    this.interval = setInterval(() => {
      for (const game of newResults) {
        game.value = Math.round(Math.random() * 500);
      }

      // We update the information to load a new reference
      this.results = [...newResults];
    }, 1500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onSelect(event) {
    console.log(event);
  }
}
