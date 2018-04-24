import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user.model';

@Component({
  selector: 'favorite-courses-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  @Output() userSave: EventEmitter<any> = new EventEmitter();

  user: User = new User({});

  constructor(private router: Router) {}

  onSigninClick() {
    // console.log('SigninComponent::onSigninClick()::firstName ==>' + this.user.firstName + '<==');
    // console.log('SigninComponent::onSigninClick()::lastName ==>' + this.user.lastName + '<==');
    this.router.navigate(['/home']);
  }
}
