import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'favorite-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.courseList;
  }

}