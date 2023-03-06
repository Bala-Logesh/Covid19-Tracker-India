import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveCasesComponent } from './active-cases/active-cases.component';
import { DeathCasesComponent } from './death-cases/death-cases.component';
import { HomeComponent } from './home/home.component';
import { RecoveredCasesComponent } from './recovered-cases/recovered-cases.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';

const routes: Routes = [
  { path: 'totalCases', component: TotalCasesComponent },
  { path: 'activeCases', component: ActiveCasesComponent },
  { path: 'recoveredCases', component: RecoveredCasesComponent },
  { path: 'deathCases', component: DeathCasesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
  HomeComponent,
  TotalCasesComponent,
  ActiveCasesComponent,
  DeathCasesComponent,
  RecoveredCasesComponent,
];
