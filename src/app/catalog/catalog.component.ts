import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product.model';
import { products } from '../data/products-data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];

  ngOnInit(): void {
    this.products = products;
    console.log(products);

    throw new Error('Products data are not implemented.');
  }

  getImageUrl(product: IProduct) {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
}
