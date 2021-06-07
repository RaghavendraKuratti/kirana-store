import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AuthService } from '../SharedProviders/services/auth.service';
import { ProductService } from '../SharedProviders/services/product.service';
import { RoutingService } from '../SharedProviders/services/routing.service';

const components = [
  ProductComponent,
  CategoriesComponent,
  HeaderComponent,
  UploadImageComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule],
  exports: [components],
})
export class SharedComponentsModule {}
