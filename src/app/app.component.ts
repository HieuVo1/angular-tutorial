import { Component } from '@angular/core';
import { asyncScheduler, from, fromEvent, interval, of, Subject, timer } from 'rxjs';
import { filter, first, last, find, single, take, takeLast, takeUntil, takeWhile, skip, skipUntil, skipWhile, distinct, distinctUntilChanged, auditTime, sampleTime, throttleTime, debounceTime, pluck } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item = [1, 2, 3, 4, 5, 6];
  destroy$ = new Subject();

  observer = {
    next: value => console.log(value),
    error: value => console.log(value),
    complete: () => console.log("completed")
  };

  ngOnInit(): void {
    // filter
    // from(this.item).pipe(
    //   filter(x => x % 2 === 0)
    // ).subscribe(this.observer);

    //first
    // from(this.item).pipe(
    //   first(x => x % 2 === 0)
    // ).subscribe(this.observer);

    //last
    // from(this.item).pipe(
    //   last(x => x % 2 === 1)
    // ).subscribe(this.observer);

    //find
    // from(this.item).pipe(
    //   find(x => x > 7)
    // ).subscribe(this.observer);

    //single cần duy nhất 1 element
    // from(this.item).pipe(
    //   single(x => x > 5)
    // ).subscribe(this.observer);

    //take(1) # first() không throw err
    // interval(10).pipe(
    //   take(2)
    // ).subscribe(this.observer);

    //takeLast()
    // interval(5).pipe(
    //   take(2),
    //   takeLast(2)
    // ).subscribe(this.observer);

    //takeUntil: sử dụng để unsubscribe
    // interval(1000).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(this.observer);

    //takeWhile

    // interval(1000).pipe(
    //   takeWhile(x => x < 10)
    // ).subscribe(this.observer);

    //skip
    // interval(1000).pipe(
    //   skip(5)
    // ).subscribe(this.observer);

    //skipUntil
    // interval(1000).pipe(
    //   skipUntil(timer(2000))
    // ).subscribe(this.observer);

    //skipWhile
    // interval(1000).pipe(
    //   skipWhile(x => x < 6)
    // ).subscribe(this.observer);

    //distinct
    // from([1, 2, 3, 4, 5, 2, 3, 1, 4, 2]).pipe(
    //   distinct()
    // ).subscribe(this.observer);

    //distinctUntilChange chi so sanh 2 gia tri gan nhat
    // from([1, 1, 2, 2, 2, 3, 4, 5, 2, 3, 1, 1, 4, 2]).pipe(
    //   distinctUntilChanged()
    // ).subscribe(this.observer);

    // audit time: sau khi emit gia tri dau tien timer chay
    // interval(1000).pipe(
    //   auditTime(1500)
    // ).subscribe(this.observer);

    //sampleTime: timer se chay lien tuc
    // interval(1000).pipe(
    //   sampleTime(1500)
    // ).subscribe(this.observer);

    //throttleTime: sau khoang thoi gian emit gia tri dau tien
    // let queryInput = document.getElementById('queryInput');
    // fromEvent(queryInput, 'keydown').pipe(
    //   throttleTime(1500, asyncScheduler, { trailing: false, leading: true }),
    //   pluck('target', 'value')
    // ).subscribe(this.observer);

    //debounceTime: sau khoang thoi gian nguoifw dung khong emit thif emit gia tri cuoi cung

    // let queryInput = document.getElementById('queryInput');
    // fromEvent(queryInput, 'keydown').pipe(
    //   debounceTime(1500),
    //   pluck('target', 'value')
    // ).subscribe(this.observer);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next();
  }

}
