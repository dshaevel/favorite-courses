import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'favorite-courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  onNoThanksClick() {
    this.router.navigate(['/favorites']);
  }

  onYesAddOrEditClick() {
    this.router.navigate(['/courses']);
  }

}
