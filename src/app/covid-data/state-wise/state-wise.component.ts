import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/services/covid-data.service';
import * as stateCode from './../../../assets/StateCodes.json';
import { CategoryScale, Chart, ChartType, LinearScale, PointElement, ScatterController, Tooltip } from 'chart.js';
Chart.register(CategoryScale, LinearScale, ScatterController, PointElement, Tooltip)

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.scss']
})
export class StateWiseComponent implements OnInit {
  stateCode = (stateCode as any).default;
  nationData: any;
  stateData: any;
  districtData: any;
  scatteredChart: Chart | undefined;
  nodata: boolean = false;
  constructor(private covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this.stateCode = Object.keys(this.stateCode).map(key => {
      return {
        key: key,
        value: this.stateCode[key],
      }
    });
    this.getCovidData();
  }

  getCovidData() {
    this.covidDataService.getCovidData().subscribe({
      next: (res) => {
        this.nationData = res;
        console.log(this.nationData);
        this.onSelectionOfsate(this.stateCode[0]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onSelectionOfsate(state: any) {
    this.stateCode.forEach((e: any) => {
      if (state.key === e.key) {
        e['active'] = true;
      } else {
        e['active'] = false;
      }
    });
    this.stateData = this.nationData[state.key] ? this.nationData[state.key] : null;
    if (this.stateData != null) {
      this.nodata = false;
      this.districtData = Object.keys(this.stateData.districts).map(e => {
        return {
          name: e,
          confirmed: this.stateData.districts[e].total.confirmed ? this.stateData.districts[e].total.confirmed : 'No Data',
          recovered: this.stateData.districts[e].total.recovered ? this.stateData.districts[e].total.recovered : 'No Data',
          deaths: this.stateData.districts[e].total.deceased ? this.stateData.districts[e].total.deceased : 'No Data',
          tested: this.stateData.districts[e].total.tested ? this.stateData.districts[e].total.tested : 'No Data'
        }
      }).filter(e => e.name !== 'Unknown');
      const chartData: any = Object.keys(this.stateData.districts).map(e => {
        return {
          name: e,
          x: this.stateData.districts[e].meta.population ? this.stateData.districts[e].total.vaccinated1 / this.stateData.districts[e].meta.population * 100 : 0,
          y: this.stateData.districts[e].meta.population ? this.stateData.districts[e].total.vaccinated1 / this.stateData.districts[e].meta.population * 100 : 0,
        }
      }).filter(e => e.name !== 'Unknown');

      this.initializChart(chartData)
    } else {
      this.nodata = true;
    }
  }

  initializChart(data: any,) {
    this.scatteredChart?.destroy();
    this.scatteredChart = new Chart('scatterdChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: data.name,
            data: data,
            backgroundColor: '#005691',
            borderColor: '#005691',
            pointRadius: 6
          }
        ]
      },
    })
  }
}
