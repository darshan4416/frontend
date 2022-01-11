import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  value = 1;
  convertedValue = 0;
  
  user=['India', 'America']

  alertMe(){
    
    this.convertedValue = this.value *60;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
