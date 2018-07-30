import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared-service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userNotLoggedIn:boolean=false;
  userName:string;
  constructor(private route : Router,private sharedService:SharedService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.userName=localStorage.getItem('token');
    }
    this.sharedService.getEmittedValue().subscribe(data =>{
      console.log('Emitted Data:: '+JSON.stringify(data));
      this.userName=data.UserName;
      console.log('userName:: '+this.userName);
      
    })
  }

  logout(){
    localStorage.setItem('token','');
    this.sharedService.change({});
    this.route.navigate(['/login'],{ replaceUrl: true })
  }
}
