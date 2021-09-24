import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  fruits$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http
              .get<User[]>('https://api.github.com/users')
              .pipe(
                map(users => users.slice(0,2))
              )
  }
}
