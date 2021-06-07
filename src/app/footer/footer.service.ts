import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  isVisbleTab = true;
  constructor() { }

  public isVisible(url: string): boolean {
    this.isVisbleTab = true;
    switch (url) {
      case '/':
        this.isVisbleTab = false;
        break;
      case '/stores':
        this.isVisbleTab = false;
        break;
      case '/stores-map':
        this.isVisbleTab = false;
        break;
      case '/product-description':
        this.isVisbleTab = false;
        break;
      case '/login':
        this.isVisbleTab = false;
        break;
      case '/signup':
        this.isVisbleTab = false;
        break;
      default:
        this.isVisbleTab = true;
        break;
    }
    return this.isVisbleTab;
  }
}
