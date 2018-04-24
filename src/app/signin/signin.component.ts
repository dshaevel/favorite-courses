import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'favorite-courses-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  @Output() userSave: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private signinService: SigninService) {}

  onSigninClick() {
    // console.log('SigninComponent::onSigninClick()::firstName ==>' + this.user.firstName + '<==');
    // console.log('SigninComponent::onSigninClick()::lastName ==>' + this.user.lastName + '<==');
    this.router.navigate(['/home']);
  }
}
