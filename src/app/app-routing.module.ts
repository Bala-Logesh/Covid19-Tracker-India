import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';

const routes: Routes = [
  { path: 'totalCases', component: TotalCasesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [HomeComponent, TotalCasesComponent];
