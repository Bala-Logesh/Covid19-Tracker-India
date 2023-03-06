import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalData } from '../models/global-data';
import { DateWiseData } from '../models/date-wise-data';

@Injectable({
  providedIn: 'root',
})
export class CoronaDataService {
  subData!: GlobalData;

  constructor(private http: HttpClient) {}

  getCoronaRealtimeData(): Observable<any> {
    const url = 'https://api.covid19api.com/total/dayone/country/India';

    return this.http.get(url).pipe(
      map((daysData: any) => {
        let data: GlobalData[] = [];

        daysData = daysData.splice(2, daysData.length - 1);

        data = daysData.map((day: GlobalData) => {
          const date = new Date(day.Date);
          const dd = date.getDate();
          const mm = date.getMonth();
          const yyyy = date.getFullYear();

          return {
            Country: day.Country,
            Confirmed: day.Confirmed,
            Deaths: day.Deaths,
            Recovered: day.Recovered,
            Active: day.Active,
            Date: `${dd}/${mm}/${yyyy}`,
          };
        });

        return <DateWiseData[]>Object.values(data);
      })
    );
  }
}
