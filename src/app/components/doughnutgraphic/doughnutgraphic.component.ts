import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnutgraphic',
  templateUrl: './doughnutgraphic.component.html',
  styles: []
})
export class DoughnutgraphicComponent implements OnInit {

  @Input() public doughnutChartLabels: string[] = ['Value1', 'Value2', 'Value3'];
  @Input() public doughnutChartData: number[] = [333, 333, 333];
  @Input() public doughnutChartType: string = 'doughnut';
  @Input() public doughnutChartTitle: string = 'Title';

  constructor() { }

  ngOnInit() {
  }

}
