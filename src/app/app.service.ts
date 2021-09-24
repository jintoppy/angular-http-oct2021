import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private fruits: string[] = [];
  fruits$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.fruits);
  constructor(private http: HttpClient) { }

  addFruit(fruitName:string){
    this.fruits.push(fruitName);
    this.fruits$.next(this.fruits);
  }

  getUsers(){
    return this.http
              .get<User[]>('https://api.github.com/users')
              .pipe(
                map(users => users.slice(0,2))
              )
  }
}
