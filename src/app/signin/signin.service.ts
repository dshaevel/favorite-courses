import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class SigninService {
  user: User = new User({});

  reset() {
    this.user.firstName = '';
    this.user.lastName = '';
  }
}
