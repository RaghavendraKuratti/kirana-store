import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/SharedProviders/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  validationsMessages = {
    email: [
      {type:'required', message:'Email is required.'},
      {type:'pattern', message:'Email is not valid.'},
    ],
    mob: [
      {type:'required',message:'Phone Number is required.'},
      {type:'minlength',message:'Phone Number should be at least 10 charecters.'},
    ],
    fname: [
      {type:'required',message:'FIrst Name is required.'},
    ],
    pwd: [
      {type:'required', message:'Password is required.'},
      {type:'minlength', message:'Password should be at least 8 charecters.'},
    ],
    cnfpwd: [
      {type:'required', message:'Confirm Password is required.'},
      {type:'minlength', message:'Confirm Password should be at least 8 charecters.'},
      {type:'mustMatch', message:'Password and Confirm Password does not match.'},
    ]
  };
  signupForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    mob: ['', [Validators.required, Validators.minLength(10)]],
    fname: ['', Validators.required],
    lname: [''],
    pwd: ['', [Validators.required, Validators.minLength(8)]],
    cnfpwd: ['', [Validators.required, Validators.minLength(8)]]
  }
  , { validators: this.checkPasswords('pwd', 'cnfpwd') }
  );

  constructor(
    private fb: FormBuilder,
    private as: AuthService
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.signupForm.reset();
  }

  get f() {
    return this.signupForm.controls;
  }
  checkPasswords(pwd: string, cnfpwd: string) {
    return (formGroup: FormGroup) => {
      const pwdControl = formGroup.controls[pwd];
      const cnfpwdControl = formGroup.controls[cnfpwd];

      if(pwdControl.value !== cnfpwdControl.value) {
        cnfpwdControl.setErrors({mustMatch: true});
      } else {
        cnfpwdControl.setErrors(null);
      }
    };
  }
  signup() {
    this.as.signupWithEmailPassword(this.signupForm.value);
  }
}
