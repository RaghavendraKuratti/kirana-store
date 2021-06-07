import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  constructor(private nav: NavController) { }

  gotoProductDescription() {
    this.nav.navigateRoot([this.routes.productDescription]);
  }
}
