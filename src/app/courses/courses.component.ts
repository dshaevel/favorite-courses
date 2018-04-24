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
  @Input('show-favorite-action') showFavoriteAction = false;

  courses: Course[];
  favoriteCourses = new Array<number>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.coursesList;
  }

  onAddToFavoritesClick(id) {
    this.favoriteCourses.push(id);
  }

  isFavorite(id): boolean {
    return id === this.favoriteCourses.find(courseId => {
      return courseId === id;
    });
  }

}
