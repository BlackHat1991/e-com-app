import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;
  signupForm:FormGroup;

  constructor(private fb: FormBuilder,private route : Router,private sharedService:SharedService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.route.navigate(['/dashboard'], { replaceUrl: true })
    }
    this.loginForm = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });

    this.signupForm = this.fb.group({
      fullname:['',[Validators.required,]],
      emailsignup:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  getLoginAccess(){
    console.log('Form Values:: '+JSON.stringify(this.loginForm.value));
    if(this.loginForm.value.email && this.loginForm.value.password){
       localStorage.setItem('token',this.loginForm.value.email);
       this.sharedService.change({'UserName':this.loginForm.value.email});
       this.loginForm.reset();
       this.route.navigate(['/dashboard'], { replaceUrl: true })
    }
  }

  CreateUser(){
    if(this.signupForm.value.emailsignup && this.signupForm.value.password){
      localStorage.setItem('token',this.signupForm.value.emailsignup);
      this.sharedService.change({'UserName':this.signupForm.value.emailsignup});
      this.signupForm.reset();
      this.route.navigate(['/dashboard'], { replaceUrl: true })
   }
  }
}
