import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day-1';
  nameArray: (string)[] = [];
  name = '';
  idx = 0;

  onSave(){
    this.nameArray.push(this.name);
    console.log(this.nameArray);
  }
  
}
