import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
enum Routes {
  productDescription = '/product-description',
  storeMap = '/stores-map',
  stores = '/stores'
};
@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  routes = Routes;
  constructor(private router: Router) { }

  gotoProductDescription() {
    this.router.navigate([this.routes.productDescription]);
  }
}
