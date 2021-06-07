import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService,
     private nav: NavController) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.as.isLoggedIn();
    if (user) {
      console.log('Guard '+user);
      return true;
    } else {
      this.nav.navigateRoot(['/login']);
      return false;
    }
  }
}
