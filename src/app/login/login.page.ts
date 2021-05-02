import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  label:string="";
  error:boolean=false;
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.username+" "+this.password);

    if(this.auth.login(this.username,this.password)==true){
         this.router.navigate(["home"]);
         
    }else{
       this.label="Error login credentiels are not correct"
       this.error=true
              console.log("false");
        setTimeout(() => {
          this.error=false;
        }, 3000);
        
    }
  }
 
}
