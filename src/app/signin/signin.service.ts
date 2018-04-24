import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class SigninService {
  user: User = new User({});
  isSignedIn = false;

  reset() {
    this.user.firstName = undefined;
    this.user.lastName = undefined;
    this.isSignedIn = false;
  }
}
