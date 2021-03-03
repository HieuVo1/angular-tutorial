import { UserService } from './user.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, interval, merge, of, partition } from 'rxjs';
import { concatAll, concatMap, debounceTime, exhaustMap, map, mergeAll, mergeMap, startWith, switchAll, switchMap, take, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  queryControl = new FormControl('');
  users: any[] = [];
  loading = true;

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.queryControl.valueChanges.pipe(
      debounceTime(500),
      tap(() => {
        this.loading = true;
      }),
      startWith(""),
      switchMap(query =>
        this.userService.getUsers(query).pipe(
          tap(() => {
            this.loading = false;
          }),
        )
      )
    ).subscribe(users => {
      this.users = users;
    })

    //exhaustMap:khi dang chay sẽ cancel toàn bộ observable khác

    //partition

    let [even$, odd$] = partition(interval(1000), val => val % 2 === 0)

    merge(
      even$.pipe(map(val => `even value ${val}`)),
      odd$.pipe(map(val => `Odd value ${val}`))
    )
      .subscribe(console.log)
  }
}
