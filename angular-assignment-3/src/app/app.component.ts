import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment-3';
  userData:any;
  ageShow=false;
  nameShow=false;
  userNames:string []=[];
  idx=0;
  nameSorted=false;

  constructor(private userService:UserService){}

  ngOnInit():void{
    this.handler();
  }
  handler(){
    this.userService.getUser().subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.userData = res;
      }
    });
  }
  extractName(){
    
   if(this.nameSorted==false){
    this.userData.forEach((element:any )=> {
      this.userNames.push(element.name);
    });
    console.log("Before sorting Names",this.userNames);
    this.userNames.sort();
   //  this.userNames = this.userNames.sort((a:any,b:any):any =>{
   //     return a.toLowerCase() < b.toLowerCase();
   //  });
    console.log("After sorting Names",this.userNames);
 
     this.userData.map((element:any)=>{
       return element.name = this.userNames[this.idx++];
     })
     this.idx=0;
     this.nameSorted = true;
     if(this.name)
   }

   

  }
  toggle(tag:any){
    if(tag==="name"){
      this.nameShow = true;
      this.ageShow = false;
      this.extractName();
    }
    if(tag=="age"){
      this.nameShow = false;
      this.ageShow = true;
    }
    
  }
  
}
