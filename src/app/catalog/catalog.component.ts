import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  //product: IProduct;
  products: IProduct[] = [];

  constructor(private http: HttpClient) {
    // this.product = {
    //   id: 2,
    //   description:
    //     "A friendly robot head with two eyes and a smile",
    //   name: "Friendly-bot26",
    //   imageName: "head-friendly.png",
    //   category: "Heads",
    //   price: 945.0,
    //   discount: 0.2
    // };
    this.http.get('assets/json/products-data.json').subscribe((data: any) => {
      this.products = data.products;   // Converts to IProduct[] using any type
      // console.log('this.products.size ' + this.products.length);
      this.products.forEach(element => {
        //console.log('name: ' + element.name);
      });
    });
  }
  calculateBidAmount(product: IProduct) {
    return product.price - (product.price * .10);
  }

  getImageURL(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName + '';
  }
}


