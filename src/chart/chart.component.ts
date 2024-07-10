import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent{

  private _chart?: ElementRef;

  @ViewChild('chart') set chart(chart: ElementRef){
    this._chart = chart;
    this.initializeChart();
  }

  initializeChart(){
    const options = {
      chart: {
        type: 'line',
        zoom: {
          enabled: true,
          type: 'xy',
        }
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);

    void chart.render();
  }



}
