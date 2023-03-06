import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { DeathCasesComponent } from './death-cases/death-cases.component';
import { ActiveCasesComponent } from './active-cases/active-cases.component';
import { RecoveredCasesComponent } from './recovered-cases/recovered-cases.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TotalCasesComponent, DeathCasesComponent, ActiveCasesComponent, RecoveredCasesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
