import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'favorite-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input('show-actions') showActions = false;
  @Input('show-edit-action') showEditAction = false;

  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.coursesList;
  }

}
