import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  stores: Observable<Store[]>;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.getStores();
  }
  getStores() {
    this.stores = this.ps.getStores();
  }
}
