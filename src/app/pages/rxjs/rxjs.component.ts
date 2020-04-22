import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  currentSub: Subscription;

  constructor() {
    this.currentSub = this.obs().subscribe(
      num => console.log(`DONE`, num),
      error => console.error(error),
      () => console.log('el observer termino')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentSub.unsubscribe();
  }

  obs(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval(() => {
        const res = {
          value: counter
        };
        counter++;
        observer.next(res);
      }, 500);
    }).pipe(
      map(res => res.value),
      filter((res, index) => {
        if ((res % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
