import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {

  public graphics: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Derecha', 'Izquierda'],
      data: [50, 50],
      type: 'doughnut',
      leyenda: 'Dirección'
    },
    grafico4: {
      labels: ['Positiva', 'Negativa', 'Neutral'],
      data: [55, 15, 30],
      type: 'doughnut',
      leyenda: 'Rango de Aprovación'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
