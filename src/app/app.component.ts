import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http';
  users$?:Observable<User[]>;

  constructor(private service: AppService){

  }

  ngOnInit(){
    this.users$ = this.service.getUsers();
  }
}
