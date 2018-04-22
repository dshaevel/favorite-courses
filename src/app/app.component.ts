import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite Courses';
  version = '1.0.0';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('AppComponent::ngOnInit()');

    this.router.navigate(['/login']);
  }

  fetchCourses() {
  }
}
