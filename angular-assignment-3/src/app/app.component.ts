import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment-3';
  isNameSelected:any;
  isAgeSelected:any;
  type:any;
  
  typeGet(event:any){
   
   this.type=event;
  }

  
}
