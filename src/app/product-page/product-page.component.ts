import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productListArray:any;
  constructor() { 
    this.productListArray=[{
      'imgUrl':'assets/products/1-medium.png',
      'category':'Electronics',
      'categoryTilte':'Keyboard',
      'price':'₹14,999',
      'ratings':'2'
    },
    {
      'imgUrl':'assets/products/2-medium.png',
      'category':'Electronics',
      'categoryTilte':'Keyboard',
      'price':'₹5,999',
      'ratings':'4'
    },
    {
      'imgUrl':'assets/products/3-medium.png',
      'category':'Electronics',
      'categoryTilte':'Keyboard',
      'price':'₹5,999',
      'ratings':'4'
    },
    {
      'imgUrl':'assets/products/4-medium.png',
      'category':'Electronics',
      'categoryTilte':'Keyboard',
      'price':'₹5,999',
      'ratings':'4'
    }];
  }

  ngOnInit() {
  }

}
