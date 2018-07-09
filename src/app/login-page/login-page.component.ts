import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private fb: FormBuilder,private route : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  getLoginAccess(){
    console.log('Form Values:: '+JSON.stringify(this.loginForm.value));
    if(this.loginForm.value.username && this.loginForm.value.password){
       localStorage.setItem('token',this.loginForm.value.username);
       this.loginForm.reset();
       this.route.navigate(['/dashboard'], { replaceUrl: true })
    }
  }
}
