import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class UserActionComponent implements OnInit {
@Output() type=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  typeSet(event:any){
  
   this.type.emit(event.target.value);
  }
}

