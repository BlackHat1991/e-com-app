import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core'

@Injectable()
export class SharedService {
@Output() fire:EventEmitter<any>=new EventEmitter();

  constructor() { 
  }
    change(data) {
        this.fire.emit(data);
    }
    getEmittedValue() {
        return this.fire;
    }  


}
