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
  temStoreData:any;
  loader:Boolean=true;
  showtypeMenu:boolean=false;
  typelevels:Array<Object> = [
    {name: "Active ICOs"},
    {name: "Upcoming"},
    {name: "Ended"}
];
selectedLevel = this.typelevels[0]['name'];
  collection = [];
  constructor(private dashboardService:DashboardService, private sharedService:SharedService) {
    this.coinsDeatilsArray=[
      {
        "categoryName":"Active Coins",
        "categoryValue":49/50,
        "type":"active"
      },
      {
        "categoryName":"Status",
        "categoryValue":50,
        "type":"price"
      },
      {
        "categoryName":"Top Influenc Rate",
        "categoryValue":2450,
        "type":"revenue"
      },
      {
        "categoryName":"Followers",
        "categoryValue":'2K',
        "type":"social"
      }
    ];
    // this.dashboardService.getCryptocurrencyActiveList().subscribe( data =>{
    //   this.loader=false;
    //   this.collection=data['data'];
    // })

   this.temStoreData=[];
    this.loadInitialData();
    this.sharedService.getEmittedValue().subscribe(data =>{
      if(data == 'close'){
        this.menuState = 'out';
      }
    })
   }

  ngOnInit() {
  }
loadInitialData(){
  this.loader=true;
  this.dashboardService.getCryptocurrencyActiveList().subscribe(data =>{
    this.loader=false;
    this.collection=data;
    this.temStoreData=data;
    this.coinsDeatilsArray[0]["categoryValue"]=this.collection.length;
    this.coinsDeatilsArray[1]["categoryValue"]="Active";
    this.coinsDeatilsArray[2]["categoryValue"]=this.getInfluencers();
  });
}
  toggleMenu() {
    this.status = !this.status; 
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  SetDataValue(Obj){
    console.log("Emiter:: "+JSON.stringify(Obj))
    if(Object.keys(Obj).length != 0){
      this.menuState = 'out';
      this.collection=this.temStoreData;
      this.collection = this.collection.filter(item =>{
         for(var key in Obj){
          if(item[key] == undefined || item[key] !=Obj[key]){
            return false;
          }
          return true;
         }
      })
    }else{
      this.menuState = 'out';
      this.loadInitialData();
      this.selectedLevel = this.typelevels[0]['name'];
    }
  }
  setKeyfilterVAlue(keyObj){
    this.collection.sort((a,b) => (a[keyObj] > b[keyObj]) ? 1 : ((b[keyObj] > a[keyObj]) ? -1 : 0));
  }
  showSelect(){
    this.showtypeMenu=!this.showtypeMenu;
  }
  selectTypeMenu(selectedMenu){
    this.selectedLevel = selectedMenu;
    switch(selectedMenu) {
      case 'Active ICOs':
          this.loadInitialData();
          break;
      case 'Upcoming':
          this.loadUpcomingDataList();
          break;
      case 'Ended':
        this.loadEndedDataList();
      default:
          this.loadInitialData();
  }
    this.showtypeMenu=!this.showtypeMenu;
  }
  loadUpcomingDataList(){
    this.loader=true;
    this.collection=[];
    this.temStoreData=[];
    this.dashboardService.getCryptocurrencyUpcomingList().subscribe(data =>{
      this.loader=false;
      this.collection=data;
      this.temStoreData=data;
      this.coinsDeatilsArray[0]["categoryValue"]=this.collection.length;
      this.coinsDeatilsArray[0]["categoryName"]="Upcoming Coins"
      this.coinsDeatilsArray[1]["categoryValue"]="Upcoming";
      this.coinsDeatilsArray[2]["categoryValue"]=this.getInfluencers();
      this.coinsDeatilsArray[3]["categoryValue"]='1K';
      
    });
  }
  loadEndedDataList(){
    this.loader=true;
    this.collection=[];
    this.temStoreData=[];
    this.dashboardService.getCryptocurrencyEndedList().subscribe(data =>{
      this.loader=false;
      this.collection=data;
      this.temStoreData=data;
      this.coinsDeatilsArray[0]["categoryValue"]=this.collection.length;
      this.coinsDeatilsArray[0]["categoryName"]="Ended Coins"
      this.coinsDeatilsArray[1]["categoryValue"]="Ended";
      this.coinsDeatilsArray[2]["categoryValue"]=this.getInfluencers();
      this.coinsDeatilsArray[3]["categoryValue"]='3K';
      
      
    });
  }
  getInfluencers(){
    this.temStoreData.sort((a,b) => (a.numberOfInfluncerRate > b.numberOfInfluncerRate) ? 1 : ((b.numberOfInfluncerRate > a.numberOfInfluncerRate) ? -1 : 0));
    let res=this.temStoreData.pop();
    console.log("Result:: "+JSON.stringify(res.numberOfInfluncerRate))
    return res.numberOfInfluncerRate;
  }
}
