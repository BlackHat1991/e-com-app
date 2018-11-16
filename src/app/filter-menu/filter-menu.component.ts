import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {
  searchvaluecoinId:Number;
  searchvaluename:String;
  searchvaluecategoryName:String;
  @Output()
  SetDataValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sharedService:SharedService) { 
    
  }

  ngOnInit() {
  }
  sendBackValue(){
    let passJson={};
    if(this.searchvaluecoinId){
      passJson['coinId']=this.searchvaluecoinId
    }
    if(this.searchvaluename){
      passJson['name']=this.searchvaluename
    }
    if(this.searchvaluecategoryName){
      passJson['categoryName']=this.searchvaluecategoryName
    }
    this.SetDataValue.emit(passJson);
    this.searchvaluecoinId=0;
    this.searchvaluename='';
    this.searchvaluecategoryName='';
    
  }
  cancelFilter(){
   this.searchvaluecoinId=0;
   this.searchvaluename='';
   this.searchvaluecategoryName='';
   this.sharedService.change("close")
  }
}
