import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DateWiseData } from '../models/date-wise-data';
import { CoronaDataService } from '../services/corona-data.service';

@Component({
  selector: 'app-recovered-cases',
  templateUrl: './recovered-cases.component.html',
  styleUrls: ['./recovered-cases.component.css'],
})

export class RecoveredCasesComponent {
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
    this.chart = new Chart('RecoveredCases', {
      type: 'bar',

      data: {
        labels: this.data.filter(day => day.Recovered !== 0).map((day) => day.Date),
        datasets: [
          {
            label: 'Recovered Cases',
            data: this.data.map((day) => day.Recovered).filter(day => day !== 0),
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
