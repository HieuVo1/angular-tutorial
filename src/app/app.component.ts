import { map, tap, timeInterval, timeout } from 'rxjs/operators';
import { Component } from '@angular/core';
import { partition, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    const [even$, odd$] = partition(interval(1000), val => val % 2 === 0);

    //tap: debug
    // even$.pipe(
    //   tap(val => console.log("Before map", val)),
    //   map(val => `I am even ${val}`),
    //   tap(val => console.log("After map", val)),
    // ).subscribe(console.log)

    //finalize: khi error hoac complete

    //timeInterval
    fromEvent(document, 'click').pipe(
      timeInterval()
    ).subscribe(console.log)

    //timeout
    fromEvent(document, 'click').pipe(
      timeout(2000)
    ).subscribe(console.log)
  }
}
