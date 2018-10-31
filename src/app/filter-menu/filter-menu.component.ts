import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {
  searchvalue:String;
  @Output()
  SetDataValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }
  sendBackValue(value){
    this.searchvalue='';
    let passJson={"Searchedkey":value}
    this.SetDataValue.emit(passJson);
    
  }
  cancelFilter(){
   this.searchvalue='';
   this.sharedService.change("close")
  }
}
