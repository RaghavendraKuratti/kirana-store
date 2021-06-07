import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/SharedProviders/models/user.model';
import { AuthService } from 'src/app/SharedProviders/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userInfo: User;
  constructor(private as: AuthService) { }
  ngOnInit(){
  }

 ionViewDidEnter() {
  this.as.getUserData().then(action =>
    {
      action.subscribe(data => {
      this.userInfo = data;
    });
  });
 }

  logout() {
    this.as.logout();
  }
  getImageUrl(event) {
    this.userInfo.photoUrl = event;
    console.log(this.userInfo);
    this.as.updateUserData(this.userInfo);
  }
}
