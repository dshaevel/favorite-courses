import { HttpClient } from '@angular/common/http';

import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  let httpMock: HttpTestingController;
  const mockCourseList = require('../../test/fixtures/courses.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(inject([CoursesService], (coursesSvc: CoursesService) => {
    coursesService = coursesSvc;
  }));

  it('should return all the courses when getAll is called', () => {
    coursesService.getAll().subscribe(theCourses => {
      expect(JSON.stringify(theCourses)).toEqual(JSON.stringify(mockCourseList));
    });
  });

  it('should return the correct course when getById is called', () => {
    const theCourse = coursesService.getById('12345');
    expect(JSON.stringify(theCourse)).toEqual(JSON.stringify(mockCourseList[0]));
  });
});
