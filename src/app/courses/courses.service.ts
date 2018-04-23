import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.model';
import { Observable } from 'rxjs/Observable';

declare var require: any;

@Injectable()
export class CoursesService {
  courseList = require('../../test/fixtures/courses.json');
  url = 'http://localhost:3000/v1/courses';

  constructor(private http: HttpClient) {}

  getAll() {
    // return this.http.get(this.url);
    return Observable.create(observer => observer.next(this.courseList));
  }
}
