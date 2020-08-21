import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form={
    username:"",
    password:""
  }

  notFound = false;

  constructor(private d : DataService,private r:Router) { }

  ngOnInit() {
  }

  login(){
    const method = "/verify-user";
    const that = this;

    this.d.funPostMethod(method,this.form)
    .then((res)=>{
      const status = res['status'];
      if(status === "OK"){
        that.r.navigateByUrl('/mainpage');
      }
      else{
        that.notFound = true;
      }
    })
    
  }
}
