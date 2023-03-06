import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DateWiseData } from '../models/date-wise-data';
import { CoronaDataService } from '../services/corona-data.service';

@Component({
  selector: 'app-active-cases',
  templateUrl: './active-cases.component.html',
  styleUrls: ['./active-cases.component.css'],
})
export class ActiveCasesComponent {
  chart: any;
  data!: DateWiseData[];

  constructor(private corona: CoronaDataService) {}

  ngOnInit() {
    this.corona.getCoronaRealtimeData().subscribe((data) => {
      this.data = data;
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart('ActiveCases', {
      type: 'bar',

      data: {
        labels: this.data.map((day) => day.Date),
        datasets: [
          {
            label: 'Active Cases',
            data: this.data.map((day) => day.Active),
            backgroundColor: 'yellow',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
