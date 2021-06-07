import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/SharedProviders/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsMessages = {
    email: [
      {type:'required', message:'Email is required.'},
      {type:'pattern', message:'Email is not valid.'},
    ],
    pwd: [
      {type:'required', message:'Password is required.'},
      {type:'minlength', message:'Password should be at least 8 charecters.'},
    ]
  };
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    pwd: ['', [Validators.required, Validators.minLength(8)]]
  });
  showPassword = false;
  constructor(public as: AuthService ,private fb: FormBuilder) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loginForm.reset();
  }
  get f() {
    return this.loginForm.controls;
  }
  get formval() {
    return this.loginForm.value;
  }
  login() {
    console.log(this.formval);
    this.as.loginWithEmailPassword(this.formval.email, this.formval.pwd);
  }
}
