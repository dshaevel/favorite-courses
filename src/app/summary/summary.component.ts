import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses/courses.service';
import { SigninService } from '../signin/signin.service';

import { Course } from '../courses/course.model';

@Component({
  selector: 'favorite-courses-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalCourseHours = 0;

  constructor(private coursesService: CoursesService, private signinService: SigninService) {}

  ngOnInit() {
    this.coursesService.favoriteCoursesList.forEach(courseId => {
      const courseObj: Course = this.coursesService.availableCoursesList.find(course => {
        return courseId === course.id;
      });
      this.totalCourseHours += courseObj.length;
    });
  }

  onSignoutClick() {
    this.coursesService.reset();
    this.signinService.reset();
  }

}
