import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  env = environment;

  constructor(private http : HttpClient) { }

  funGetMethod(method){
    return this.http.get(this.env.url+method)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  funPostMethod(method,form){
    return this.http.post(this.env.url+method,form)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
