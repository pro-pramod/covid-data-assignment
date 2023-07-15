import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateWiseComponent } from './state-wise/state-wise.component';

const routes: Routes = [
  {
    path: '',
    component: StateWiseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidDataRoutingModule { }
