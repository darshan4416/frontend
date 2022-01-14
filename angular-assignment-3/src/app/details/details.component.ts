import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class UserDetailsComponent implements OnInit ,OnChanges{
  @Input() stype:any;
users:any=[];

  constructor(private userService:UserService) { }
  ngOnChanges(): void {

      this.users.sort((a:any, b:any): any =>{

        if(this.stype=='name'){
          return a.name.toLowerCase() > b.name.toLowerCase()?1:-1;
        }
        else{
          return a.age > b.age ? 1:-1; 
        }
        
       });
    
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUser().subscribe((res:any)=>{
      if(res){
       
        this.users=res;
      }
    },error=>{
      console.log(error);
    })
  }
}
