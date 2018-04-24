import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from './courses/courses.service';
import { SigninService } from './signin/signin.service';

import { Course } from './courses/course.model';

@Component({
  selector: 'favorite-courses-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite Courses';
  version = '1.0.0';

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private signinService: SigninService
  ) {}

  ngOnInit() {
    this.coursesService.getAll();
    this.router.navigate(['/signin']);
  }

}
