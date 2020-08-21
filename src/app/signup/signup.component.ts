import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form={
    username:"",
    password:""
  };

  invalid:boolean = false;

  constructor(private d : DataService,private r : Router) { }

  ngOnInit() {
  }

  funSignup(){
    if(this.form.username === "" || this.form.password === ""){
      this.invalid = true
    }
    else{
      const method = "/insert-user";
      const that = this;
      this.d.funPostMethod(method,this.form)
      .then((res)=>{
        const status = res['status'];
  
        if(status === "OK"){
          that.r.navigateByUrl("");
        }
        else{
          
        }
      })
    }

  }

}
