import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DateWiseData } from '../models/date-wise-data';
import { CoronaDataService } from '../services/corona-data.service';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css'],
})
export class TotalCasesComponent {
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
    this.chart = new Chart('TotalCases', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.data.map(day => day.Date),
        datasets: [
          {
            label: 'Total Cases',
            data: this.data.map(day => day.Confirmed),
            backgroundColor: 'purple',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
