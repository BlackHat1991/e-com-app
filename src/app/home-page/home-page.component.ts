import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { DashboardService } from '../services/dashboard-service';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomePageComponent implements OnInit {
  menuState:string = 'out';
  status: boolean = false;
  coinsDeatilsArray:any;
  loader:Boolean=true;
  collection = [];
  constructor(private dashboardService:DashboardService, private sharedService:SharedService) {
    this.coinsDeatilsArray=[
      {
        "categoryName":"Active Coins",
        "categoryValue":49/50,
        "type":"active"
      },
      {
        "categoryName":"Market Price",
        "categoryValue":50,
        "type":"price"
      },
      {
        "categoryName":"Revenue",
        "categoryValue":2450,
        "type":"revenue"
      },
      {
        "categoryName":"Followers",
        "categoryValue":234,
        "type":"social"
      }
    ];
    this.dashboardService.getCryptocurrencyActiveList().subscribe( data =>{
      this.loader=false;
      this.collection=data['data'];
    })
    this.sharedService.getEmittedValue().subscribe(data =>{
      console.log("From Service:: "+data);
      if(data == 'close'){
        this.menuState = 'out';
      }
    })
   }

  ngOnInit() {
  }

  toggleMenu() {
    this.status = !this.status; 
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  SetDataValue(event){
    console.log("event:: "+JSON.stringify(event));
    if(event){
      this.menuState = 'out';
    }
  }


}
