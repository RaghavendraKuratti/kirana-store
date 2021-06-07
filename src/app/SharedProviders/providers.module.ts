import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { RoutingService } from './services/routing.service';

const services = [
  ProductService, RoutingService, AuthService
];
@NgModule({
  imports:[],
  providers: [services],
})
export class SharedProvidersModule {}
