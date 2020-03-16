import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../service/Products';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.page.html',
  styleUrls: ['./gallery-details.page.scss'],
})
export class GalleryDetailsPage implements OnInit {
  products = products
  product;
  id;
  constructor(private activedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id')
    this.product = products.filter((filterId) => filterId.id == this.id)[0]
    console.log(this.product, this.id)
  }

}
