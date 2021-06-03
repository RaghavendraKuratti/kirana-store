import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { RoutingService } from './services/routing.service';

const components = [
  ProductComponent, CategoriesComponent, HeaderComponent
];
const services = [
  ProductService, RoutingService
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule],
  providers: [services],
  exports: [components],
})
export class SharedComponentsModule {}
