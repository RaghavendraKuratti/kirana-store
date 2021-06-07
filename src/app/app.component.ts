import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavigationEnd, Router } from '@angular/router';
import { FooterService } from './footer/footer.service';
import { AuthService } from './SharedProviders/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private fs: FooterService,
    private router: Router,
    private as: AngularFireAuth
    ) {}
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.fs.isVisible(val.url);
      }
    });
    this.as.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
