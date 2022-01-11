import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day-1';
  currIndex : any;
  currValue:any;
  tarIndex:any;
  data: any = [
    { name: 'India Rupee', symbol: '₹', value: { '₹': 1, '$': 0.013450394, '৳': 1.1543927 } }, 
    { name: 'United States Dollar', symbol: '$', value: { '₹': 74.3417, '$': 1, '৳': 85.90755} },
    { name: 'Bangladeshi taka', symbol: '৳', value: { '₹': 0.866256, '$': 0.0116404, '৳': '1'} }, 
  ]
  res:any = 0;

  handler(){
    this.res = this.data[this.currIndex].value[this.data[this.tarIndex].symbol] * this.currValue;
  }


  
  
}
