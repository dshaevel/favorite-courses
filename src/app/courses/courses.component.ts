import { Component, Input } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'favorite-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input('show-actions') showActions = false;
  @Input('show-edit-action') showEditAction = false;
  @Input('show-favorite-action') showFavoriteAction = false;

  constructor(private coursesService: CoursesService) { }

  onAddToFavoritesClick(id) {
    this.coursesService.favoriteCoursesList.push(id);
  }

  isFavorite(id): boolean {
    return id === this.coursesService.favoriteCoursesList.find(courseId => {
      return courseId === id;
    });
  }

}
