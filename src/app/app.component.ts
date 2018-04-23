import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from './courses/courses.service';
import { Course } from './courses/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite Courses';
  version = '1.0.0';
  courses: any;

  constructor(private router: Router, private coursesService: CoursesService) {}

  ngOnInit() {
    console.log('AppComponent::ngOnInit()');
    this.fetchCourses();
    this.router.navigate(['/login']);
  }

  fetchCourses() {
    this.coursesService.getAll()
      .subscribe(theCourses => {
        this.courses = theCourses;
        console.log('courses ==>' + JSON.stringify(this.courses, null, 2) + '<==');
      });
  }
}
