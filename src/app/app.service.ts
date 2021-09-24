import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

interface ISearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[]
}


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private fruits: string[] = [];
  fruits$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.fruits);
  constructor(private http: HttpClient) { }

  addFruit(fruitName:string){
    this.fruits = [...this.fruits, fruitName];
    this.fruits$.next(this.fruits);
  }

  getFruit(){
    return this.fruits;
  }

  getUsers(query:string){
    return this.http
              .get<ISearchResult>(`https://api.github.com/search/users?q=${query}`)
              .pipe(
                map(searchResult => searchResult.items)
              )
  }
}
