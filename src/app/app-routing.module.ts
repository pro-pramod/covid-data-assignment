import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDataModule } from './covid-data/covid-data.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./covid-data/covid-data.module').then((m) => m.CovidDataModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
