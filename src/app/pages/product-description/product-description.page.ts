import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.page.html',
  styleUrls: ['./product-description.page.scss'],
})
export class ProductDescriptionPage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
  };
  products: Observable<Product[]>;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = this.ps.getProducts();
  }
}
