import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  fruitName:string = '';
  fruits: string[] = [];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.fruits$.subscribe(fruits => {
      this.fruits = fruits;
    });

  }

}
