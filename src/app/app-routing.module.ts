import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./components/portfolio/print-media.component";
import {DashboardComponent} from "./components/layout/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
