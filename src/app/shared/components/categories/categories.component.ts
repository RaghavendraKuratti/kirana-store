import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../SharedProviders/models/product';
import { ProductService } from '../../../SharedProviders/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() lnegth: number;
  categories: Observable<Category[]>;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.ps.getCategories(this.lnegth);
  }
}
