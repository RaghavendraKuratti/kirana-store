import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { first, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any;
  userInfo = {
    displayName: '',
    uid: ''
  };
  constructor(private auth: AngularFireAuth,
    private nav: NavController,
    private fs: AngularFirestore
    ) {
      this.userInfo = {
        displayName: 'raghu',
        uid: '12345678'
      };
   }
   async isLoggedIn() {
    this.authState = await this.auth.authState.pipe(first()).toPromise();
    return this.authState.uid;
   }
   loginWithEmailPassword(email: string, pwd: string) {
     return this.auth.signInWithEmailAndPassword(email, pwd).then((res) => {
      this.userInfo = {
        displayName: 'raghu',
        uid: '12345678'
      };
      this.nav.navigateRoot(['/home']);
     }).catch((error) => {
      console.log(error);
     });
   }
   signupWithEmailPassword(user: any) {
     return this.auth.createUserWithEmailAndPassword(user.email, user.pwd).then((res) => {
       if (res.user) {
        this.addUpdateUser(user, res.user.uid);
       }
       this.nav.navigateRoot(['/home']);
     }).catch((error) => {
      console.log(error);
     });
   }
   resetPassword(email: string) {
      return this.auth.sendPasswordResetEmail(email);
   }
   logout() {
     return this.auth.signOut().then(() => {
       this.nav.navigateRoot(['/login']);
     });
   }

   addUpdateUser(user: User, uid: any) {
     this.fs.collection('Users').doc(uid).set(user);
   }

  async updateUserData(user: User) {
    const uid = await this.isLoggedIn();
    return this.fs.collection('Users').doc(uid).update(user);
  }
  async getUserData() {
    const uid = await this.isLoggedIn();
    return this.fs.collection('Users').doc(uid).valueChanges().pipe(
      map(x => x as User)
    );
  }
}
