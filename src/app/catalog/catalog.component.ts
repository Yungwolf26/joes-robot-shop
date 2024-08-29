import { Component } from '@angular/core';
import {IProduct} from "../model/product.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product =
      {
        id: 1,
        description: 'A friendly robot head with two eyes and smile -- Great for domestic use.',
        name: 'Robotic Chair',
        imageName: "head-friendly.png",
        category: "Heads",
        price: 945,
        discount: 0.2,
      };
  }

  geImageUrl(product: IProduct) {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
}
