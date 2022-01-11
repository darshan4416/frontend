import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/posts";
  
  getApi(){
    return this.http.get(this.url);
  }
}
