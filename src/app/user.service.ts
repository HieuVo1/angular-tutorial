import { delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { users } from './constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(query: string): Observable<any[]> {
    return of(users).pipe(
      delay(2000),
      map(data =>
        data.filter(u => {
          if (!query) return true;
          return (
            u.name.toLowerCase().startsWith(query.toLowerCase()) ||
            u.email.toLowerCase().startsWith(query.toLowerCase()))
        })
      )
    )
  }
}
