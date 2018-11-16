import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'keyFilter'
})
export class KeyFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let obj = JSON.parse(args);
      let filter = null;
      let filtered = null;
      for (var key in obj) {
          if (obj.hasOwnProperty(key) && obj[key] != null && obj[key] != '') {
              filtered=true;
            let val:String = obj[key].toString();
            if (filter == null) {
                filter = value.filter(role => role[key] != null && (role[key].toString().toLowerCase().indexOf(val.toLowerCase())   != -1))
            } else {
                filter = filter.filter(role => role[key] != null && role[key].toString().toLowerCase().indexOf(val.toLowerCase())   != -1)
            }
          }
        }
      
      if (filtered) {
          return filter;
      } else {
          return value;
      }
  }

}
