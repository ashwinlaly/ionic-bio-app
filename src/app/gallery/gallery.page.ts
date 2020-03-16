import { Component, OnInit } from '@angular/core';
import { products } from '../service/Products';
import { product } from '../classes/product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit() {
    
  }

  navigate(data : product){
    console.log(data)
  }
}
