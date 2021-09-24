import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  onAdd(fruitName:string){
    this.service.addFruit(fruitName);
  }

}
