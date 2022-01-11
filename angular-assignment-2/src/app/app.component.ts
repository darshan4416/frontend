import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment-2';
  userData:any;
  
  constructor(private apiService:ApiService){}

  start(){
    this.handler();
  }
  handler(){
    this.apiService.getApi().subscribe((res:any)=>{
        if(res){
          console.log(res);
          this.userData = res;
         }
    })
  }
  reset(){
    this.userData.length=0;
  }
  
}
