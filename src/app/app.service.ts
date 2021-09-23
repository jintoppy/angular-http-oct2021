import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http
              .get<User[]>('https://api.github.com/users')
              .pipe(
                map(users => users.slice(0,2))
              )
  }
}
