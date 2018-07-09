import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userNotLoggedIn:boolean=false;
  userName:string;
  constructor(private route : Router) { }

  ngOnInit() {
    let user=localStorage.getItem('token');
    console.log('Name::'+user);
    if(user && user !=null && user !=undefined){
      this.userName=user;
      this.userNotLoggedIn=true;
    } 
  }
  userLogin(){
    this.route.navigate(['/login'])
  }
  userLogOut(){
    localStorage.setItem('token','');
    this.route.navigate(['/login'],{ replaceUrl: true })
    
  }
}
