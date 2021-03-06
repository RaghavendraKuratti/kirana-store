import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Product } from '../../../SharedProviders/models/product';
import { ProductService } from '../../../SharedProviders/services/product.service';
import { RoutingService } from '../../../SharedProviders/services/routing.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  slideOpts = {
    slidesPerView: 2.4,
    spaceBetween: 10
  };
  products: Observable<Product[]>;
  constructor(
    private ps: ProductService,
    private rs: RoutingService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = this.ps.getProducts();
  }
  navigateToDescription() {
    this.rs.gotoProductDescription();
  }
}
