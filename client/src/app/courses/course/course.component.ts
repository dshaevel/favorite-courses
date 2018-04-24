import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

import { CoursesService } from '../courses.service';
import { Course } from '../course.model';

@Component({
  selector: 'favorite-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  courseCopy: Course = new Course({});
  formHeader: string;
  isCreate = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.course = data['course'] || new Course({});
        this.isCreate = this.course.id ? false : true;
        this.formHeader = this.isCreate ? 'Add course:' : 'Edit course:';

        // clone the course so that the course data can be reset
        this.courseCopy.id = this.course.id;
        this.courseCopy.name = this.course.name;
        this.courseCopy.length = this.course.length;
        this.courseCopy.subject = this.course.subject;
      }
    );
  }

  onSaveClick() {
    // TODO: validate the form

    if (typeof this.course.id === 'string') {
      this.course.id = this.course.id.padStart(5, '0');
    }
    if (typeof this.course.length === 'string') {
      this.course.length = Number(this.course.length) * 1;
    }

    if (this.isCreate) {
      this.coursesService.availableCoursesList.push(this.course);
    }

    this.router.navigate(['/courses']);
  }

  onCancelClick() {
    this.course.id = this.courseCopy.id;
    this.course.name = this.courseCopy.name;
    this.course.length = this.courseCopy.length;
    this.course.subject = this.courseCopy.subject;
  }

}
