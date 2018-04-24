import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SigninService } from './signin.service';

@Component({
  selector: 'favorite-courses-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router, private signinService: SigninService) {}

  onSigninClick() {
    this.signinService.isSignedIn = true;
    this.router.navigate(['/home']);
  }
}
