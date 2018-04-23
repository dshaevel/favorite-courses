import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'favorite-courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  onNoThanksClick() {
    this.router.navigate(['/favorites']);
  }

  onYesAddOrEditClick() {
    this.router.navigate(['/courses']);
  }

}