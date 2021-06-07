import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Product, Store } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      img: 'https://www.jiomart.com/images/product/150x150/490001797/maaza-mango-drink-600-ml-0-20210405.jpg',
      finalprice: '250',
      price: '300',
      qty: 0,
      name: 'Maaza Mango',
      offer: 12
    },
    {
      img: 'https://www.jiomart.com/images/product/150x150/490503479/kissan-fresh-tomato-ketchup-950-g-0-20210330.jpg',
      finalprice: '250',
      price: '300',
      qty: 0,
      name: 'Kissan Fresh Tomato Ketchup 950 g',
      offer: 20
    },
    {
      // eslint-disable-next-line max-len
      img: 'https://www.jiomart.com/images/product/150x150/490337869/pears-pure-gentle-soap-with-natural-oils-125-g-pack-of-3-0-20210122.jpg',
      finalprice: '250',
      price: '300',
      qty: 0,
      name: 'Pears Pure & Gentle Bathing Bar 125 g (Pack of 3)',
      offer: 30
    },
    {
      img: 'https://www.jiomart.com/images/product/150x150/490001797/maaza-mango-drink-600-ml-0-20210405.jpg',
      finalprice: '250',
      price: '300',
      qty: 0,
      name: 'Maaza Mango Drink',
      offer: 40
    }
  ];
  categories: Category[] = [
    {
      id: 1,
      img: 'assets/img/atta.png',
      label: 'Atta & Flours'
    },
    {
      id: 2,
      img: 'assets/img/rice.png',
      label: 'Rice'
    },
    {
      id: 3,
      img: 'assets/img/biscuit.png',
      label: 'Biscuits'
    },
    {
      id: 4,
      img: 'assets/img/atta.png',
      label: 'Atta & Flours'
    },
    {
      id: 5,
      img: 'assets/img/rice.png',
      label: 'Rice'
    },
    {
      id: 6,
      img: 'assets/img/biscuit.png',
      label: 'Biscuits'
    },
    {
      id: 7,
      img: 'assets/img/atta.png',
      label: 'Atta & Flours'
    },
    {
      id: 8,
      img: 'assets/img/rice.png',
      label: 'Rice'
    },
    {
      id: 9,
      img: 'assets/img/biscuit.png',
      label: 'Biscuits'
    }
  ];
  stores: Store[] = [
    {
      id: 1,
      img: 'assets/img/store.png',
      name: 'Mialan Bakery',
      lat: '15.9115',
      lng: '74.5196',
      itemCount: 12
    },
    {
      id: 2,
      img: 'assets/img/store.png',
      name: 'Kuratti\'s House',
      lat: '15.910959027510655',
      lng: '74.51867322759533',
      itemCount: 12
    },
    {
      id: 3,
      img: 'assets/img/store.png',
      name: 'Friends Hair Style',
      lat: '15.9097',
      lng: '74.5216',
      itemCount: 12
    },
    {
      id: 4,
      img: 'assets/img/store.png',
      name: 'HKGN Repair',
      lat: '15.9093',
      lng: '74.5205',
      itemCount: 12
    },
    {
      id: 5,
      img: 'assets/img/store.png',
      name: 'Ratandeep General Stores',
      lat: '15.9103',
      lng: '74.5203',
      itemCount: 12
    },
    {
      id: 6,
      img: 'assets/img/store.png',
      name: 'Snacks and Sweet Stall',
      lat: '15.911013195966252',
      lng: '74.51888176934624',
      itemCount: 12
    },
  ];
  constructor() { }

  getProducts(): Observable<Product[]>  {
    return of(this.products) as Observable<Product[]>;
  }
  getCategories(length?: number): Observable<Category[]> {
    return (of(this.categories.filter(data => data.id <= (length || this.categories.length))) as Observable<Category[]>);
  }
  getStores(): Observable<Store[]> {
    return of(this.stores) as Observable<Store[]>;
  }
}
