import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    const promise = new Promise((resolve, reject) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        if (counter === 3) {
          resolve(true);
        }
       }, 1000);
    });

    promise.then(res => {
      console.log(`Done`);
    }).catch(err => console.log(err)).finally(() => {
      console.log(1);
    });
  }

  ngOnInit() {
  }

}
