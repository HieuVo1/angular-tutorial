import { Component } from '@angular/core';
import { defer, from, fromEvent, fromEventPattern, interval, of, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  observer = {
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log('complete'),
  };

  ngOnInit(): void {
    // // of nhận vào bất cứ giá trị nào và emit giá trị đó
    // of(1, 2, 3, 4, 'hello').subscribe(this.observer);
    // // Promise
    // of(Promise.resolve("hello")).subscribe(this.observer);


    // //from convert từ 1 promise sang observable
    // from(Promise.resolve("hello")).subscribe(this.observer);
    // from([1, 2, 3, 4]).subscribe(this.observer);


    // //fromEvent
    // fromEvent(document, "click").subscribe(this.observer);

    // //fromEventPattern xử lí cho sự kiện phức tạp.
    // fromEventPattern(
    //   (handler) => {
    //     document.addEventListener('click', handler);
    //   }, //add Handler
    //   (handler) => {
    //     document.removeEventListener('click', handler);
    //   } // Remove Handler
    // ).subscribe(this.observer);

    //interval emit giá trị từ 0 theo 1 chu kỳ nhất định == setInterval
    //interval(1000).subscribe(this.observer);

    // //timer == setTimeout
    // timer(1000).subscribe(this.observer);
    // timer(1000, 1000).subscribe(this.observer);// interval delay 1000ms

    //throwError
    // throwError("error").subscribe(this.observer);

    //defer nhận vào observableFactory khi subscribe mới chạy function
    const random$ = defer(() => of(Math.random()));

    random$.subscribe(this.observer);
    random$.subscribe(this.observer);
    random$.subscribe(this.observer);
  }
}
