import { Component } from '@angular/core';
import { forkJoin, from, of, interval, combineLatest, zip, concat, merge, race, fromEvent } from 'rxjs';
import { delay, take, map, withLatestFrom, startWith, pairwise } from 'rxjs/operators';

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

  ngOnInit(): void {

    //forkJoin: gửi API request
    // forkJoin([
    //   of("hello").pipe(delay(1000)),
    //   interval(1000).pipe(take(2)),
    //   of("I'm Hieu").pipe(delay(3000))
    // ]).subscribe(this.observer);

    //combineLatest: emit gia trị đầu khi tất cả các stream emit - sử dụng cho phân trang
    // combineLatest([
    //   interval(2000).pipe(map(x => `First: ${x}`)),
    //   interval(1000).pipe(map(x => `Second: ${x}`)),
    //   interval(3000).pipe(map(x => `Third: ${x}`))
    // ]);

    //zip
    // zip(
    //   of(1, 2, 3),
    //   of(4, 5, 6),
    //   of(7, 8, 9))
    //   .subscribe(this.observer);

    //concat: emit lần lượt
    // concat(
    //   interval(1000).pipe(take(3)),
    //   interval(500).pipe(take(5))
    // ).subscribe(this.observer);

    //merge
    // merge(
    //   interval(1000).pipe(take(3), map(x => `First ${x}`)),
    //   interval(500).pipe(take(5), map(x => `Second ${x}`))
    // ).subscribe(this.observer);

    //race
    // race(
    //   interval(1000).pipe(take(3), map(x => `First ${x}`)),
    //   interval(500).pipe(take(5), map(x => `Second ${x}`))
    // ).subscribe(this.observer);

    //withLatestFrom

    // let withLatestFrom$ = interval(2000).pipe(map(x => `Need latest from this value: ${x}`));

    // fromEvent(document, 'click')
    //   .pipe(withLatestFrom(withLatestFrom$)).subscribe(this.observer);

    //startWith

    // interval(1000).pipe(startWith("hello")).subscribe(this.observer);

    //pairwise

    from([1, 2, 3, 4, 5])
      .pipe(
        pairwise()
      )
      .subscribe(this.observer)
  }
}
