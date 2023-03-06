import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DateWiseData } from '../models/date-wise-data';
import { CoronaDataService } from '../services/corona-data.service';

@Component({
  selector: 'app-death-cases',
  templateUrl: './death-cases.component.html',
  styleUrls: ['./death-cases.component.css'],
})

export class DeathCasesComponent {
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
    this.chart = new Chart('DeathCases', {
      type: 'bar',

      data: {
        labels: this.data.map((day) => day.Date),
        datasets: [
          {
            label: 'Death Cases',
            data: this.data.map((day) => day.Deaths),
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
