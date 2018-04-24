import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.model';
import { Observable } from 'rxjs/Observable';

declare var require: any;

@Injectable()
export class CoursesService {
  courseListFromFile = Array<any>();
  availableCoursesList = Array<any>();
  favoriteCoursesList = Array<number>();

  url = 'http://localhost:3000/v1/courses';

  constructor(private http: HttpClient) {
    this.populateCourseList();
  }

  getAll() {
    return Observable.create(observer => observer.next(this.availableCoursesList));
  }

  getById(id: string) {
    return this.availableCoursesList.find(course => {
      return '' + course['id'] === id;
    });
  }

  reset() {
    this.availableCoursesList.length = 0;
    this.favoriteCoursesList.length = 0;
    this.populateCourseList();
  }

  private populateCourseList() {
    this.http.get(this.url).subscribe((courses: Array<any>) => {
      this.courseListFromFile = courses;

      this.courseListFromFile.forEach(course => {
        const courseClone: Course = new Course({});

        courseClone.id = course.id;
        courseClone.name = course.name;
        courseClone.length = course.length;
        courseClone.subject = course.subject;

        this.availableCoursesList.push(courseClone);
      });
    });
  }
}
