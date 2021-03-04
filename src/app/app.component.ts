import { Component } from '@angular/core';
import { Subject, timer, of, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { finalize, switchMapTo } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  createObserver = observer => ({
    next: val => console.log(observer, val),
    error: err => console.log(observer, err),
    complete: () => console.log(observer, "completed")
  });

  loadingSubject = new Subject();
  behaviorSubject = new BehaviorSubject("hello");
  replaySubject = new ReplaySubject(2);
  asyncSubject = new AsyncSubject();

  ngOnInit(): void {
    // this.getUsers().subscribe(console.log);
    // this.loadingSubject.subscribe(this.createObserver("Component A"));

    //behaviorSubject: luu tru gia tri cuoi cung da emit
    // this.behaviorSubject.subscribe(this.createObserver("Component A"))
    // this.behaviorSubject.next("world")
    // this.behaviorSubject.subscribe(this.createObserver("Component B"))

    //replaySubject: co the thay doi so gia tri luu tru cuoi cung

    // this.replaySubject.subscribe(this.createObserver("Component A"))
    // this.replaySubject.next("hello")
    // this.replaySubject.next("world")
    // this.replaySubject.next("world2")
    // this.replaySubject.subscribe(this.createObserver("Component B"))

    //asyncSubject: chir emit gia tri cuoi cung cho observer khi complete
    this.asyncSubject.subscribe(this.createObserver("Component A"))
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.next(1);
    this.asyncSubject.complete();
  }

  getUsers() {
    this.loadingSubject.next(true);
    return timer(3000).pipe(
      switchMapTo(of("users")),
      finalize(() => {
        this.loadingSubject.next(false)
      })
    )
  }



}
