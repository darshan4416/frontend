import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day-1';
  author = 'darshan';
  profile = 'coder';
  hobbies = {
    sport:'chess',
    book:'the subtle art of not giving a f*ck'
  };
  
}
