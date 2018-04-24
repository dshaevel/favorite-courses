import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

import { Course } from '../course.model';

@Component({
  selector: 'favorite-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  courseCopy: Course = new Course({});

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.course = data['course'] || new Course({});

        // clone the course so that the course data can be reset
        this.courseCopy.id = this.course.id;
        this.courseCopy.name = this.course.name;
        this.courseCopy.length = this.course.length;
        this.courseCopy.subject = this.course.subject;
      }
    );
  }

  onSaveClick() {
    // validate the form
    this.router.navigate(['courses']);
  }

  onCancelClick() {
    this.course.id = this.courseCopy.id;
    this.course.name = this.courseCopy.name;
    this.course.length = this.courseCopy.length;
    this.course.subject = this.courseCopy.subject;
  }

}
