import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  password:string;
  error:boolean=false;
  label:string="";
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }
  
  register(){
    console.log("register");
    if(this.auth.checkIfUserAlredyExist(this.username,this.password)){
      this.error=true;
      this.label="User aleredy exist";
    }else{
    this.auth.register(this.username,this.password);
    }
  }
}
