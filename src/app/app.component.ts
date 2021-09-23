import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http';
  users:User[] = [];

  constructor(private service: AppService){

  }

  ngOnInit(){
    this.service.getUsers()
          .subscribe(users => {
            this.users = users;
          });
  }
}
