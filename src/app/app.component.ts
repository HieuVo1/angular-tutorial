import { Component } from '@angular/core';
import { throwError, of, iif, defer } from 'rxjs';
import { catchError, map, retry, delay, defaultIfEmpty, throwIfEmpty, every } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observer = {
    next: value => console.log(value),
    error: err => console.log(err),
    complete: () => console.log("completed")
  }

  handlerError = () => {
    console.log(`
    -------------
    I am handling the error. Alert to user
    -------------
    `)
  }
  ngOnInit(): void {
    // throwError("I'm error").pipe(
    //   catchError((err, caught) => {
    //     this.handlerError();
    //     return of("default value");
    //   })
    // )
    //   .subscribe(this.observer);

    //retry
    // let cached = [4, 5];
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     map(n => {
    //       if (cached.includes(n)) {
    //         throw new Error("Duplicated: " + n);
    //       }
    //       return n;
    //     }),
    //     retry(3)
    //   ).subscribe(this.observer);

    // conditional
    //defaultIfEmpty
    // of().pipe(
    //   delay(3000),
    //   defaultIfEmpty("default value")
    // ).subscribe(this.observer);

    //throwIfEmpty
    // of().pipe(
    //   delay(3000),
    //   throwIfEmpty(() => "empty value")
    // ).subscribe(this.observer);

    //every
    // of(1, 2, 3, 4, 5)
    //   .pipe(every(x => x < 6))
    //   .subscribe(this.observer);

    //iif chạy 2 function ngay cả khi chưa subscribe
    let userId = 1;
    function updateObservable() {
      return of("update");
    }

    function createObservable() {
      return of("create");
    }
    iif(() => userId == 2, updateObservable(), createObservable()).subscribe(this.observer);

    defer(() => {
      return userId == null ? updateObservable() : createObservable();
    }).subscribe(this.observer);

  }
}
