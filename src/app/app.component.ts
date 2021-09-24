import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http';
  users$?:Observable<User[]>;
  searchTerm$: Subject<string> = new Subject<string>();

  constructor(private service: AppService){

  }

  ngOnInit(){
    this.users$ = this.searchTerm$
        .pipe(
          debounceTime(200),
          distinctUntilChanged(),
          filter(val => val.length > 3),
          switchMap(val => this.service.getUsers(val)),
          // map((users:User[]) => users.slice(0,2))
        );
  }

  onInputChange(val: string){
    
    this.searchTerm$.next(val);
    // this.users$ = this.service.getUsers(val);
  }

  
}
