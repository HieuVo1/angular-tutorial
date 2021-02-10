import { Component } from '@angular/core';
import { merge, of, interval, fromEvent, BehaviorSubject } from 'rxjs';
import { map, delay, pluck, mapTo, reduce, toArray, buffer, bufferTime, scan } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan', postCount: 5 },
    { id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran', postCount: 22 },
  ];

  usersVm = this.users.map(user => {
    return {
      ...user,
      fullname: `${user.firstname} ${user.lastname}`
    }
  });

  source$ = interval(1000);
  click$ = fromEvent(document, 'click');

  observer = {
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('completed'),
  };

  param$ = of([{ id: 12, foo: { bar: 12 } }]);

  initialState = {};
  stateSubject = new BehaviorSubject(this.initialState);

  state$ = this.stateSubject.asObservable().pipe(scan((state, partialState) => {
    return { ...state, ...partialState }
  }))

  ngOnInit(): void {
    // RxJS < 5.5 dot-chained operators

    //map
    // merge(
    //   of(this.users[0]).pipe(delay(2000)),
    //   of(this.users[1]).pipe(delay(4000)),
    // ).pipe(
    //   map(user => {
    //     return { ...user, fullName: `${user.firstname} ${user.lastname}` }
    //   })
    // )
    //   .subscribe(this.observer);


    //pluck lấy ra 1 property từ source
    // this.param$.pipe(pluck('0', 'foo', 'bar')).subscribe(this.observer);


    //mapTo chuyen doi gia tri ve gia tri mac dinh
    // merge(
    //   fromEvent(document, "mouseenter").pipe(mapTo(true)),
    //   fromEvent(document, "mouseleave").pipe(mapTo(false)),
    // ).subscribe(this.observer);


    //reduce chi chay khi observable complete
    // merge(
    //   of(this.users[0]).pipe(delay(2000)),
    //   of(this.users[1]).pipe(delay(4000)),
    //   interval(1000).pipe(mapTo({ postCount: 1 }))
    // )
    //   .pipe(reduce((acc, cur) => {
    //     return acc + cur.postCount;
    //   }, 0))
    //   .subscribe(this.observer);


    //toArray chỉ chạy khi complete
    // merge(
    //   of(this.users[0]).pipe(delay(2000)),
    //   of(this.users[1]).pipe(delay(4000))
    // )
    //   .pipe(toArray())
    //   .subscribe(this.observer);


    // buffer khi có sự kiện gì thì mới emit
    //this.source$.pipe(buffer(this.click$)).subscribe(this.observer);


    //bufferTime mỗi thời gian emit
    //this.source$.pipe(bufferTime(2000)).subscribe(this.observer);


    //scan giống reduce nhưng emit accumulator mỗi lần parent emit value
    // merge(
    //   of(this.users[0]).pipe(delay(2000)),
    //   of(this.users[1]).pipe(delay(4000)),
    //   interval(1000).pipe(mapTo({ postCount: 1 }))
    // )
    //   .pipe(scan((acc, cur) => {
    //     return acc + cur.postCount;
    //   }, 0))
    //   .subscribe(this.observer);

    this.state$.subscribe(this.observer);

    this.stateSubject.next({ name: "Hieu" });
    this.stateSubject.next({ age: 20 });
  }
}
