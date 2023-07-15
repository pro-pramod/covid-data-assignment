import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidDataRoutingModule } from './covid-data-routing.module';
import { StateWiseComponent } from './state-wise/state-wise.component';
import { NationWiseComponent } from './nation-wise/nation-wise.component';


@NgModule({
  declarations: [
    StateWiseComponent,
    NationWiseComponent
  ],
  imports: [
    CommonModule,
    CovidDataRoutingModule
  ]
})
export class CovidDataModule { }
