import { Component, ViewChild } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'favorite-courses-add-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  @ViewChild(CoursesComponent) coursesComponent: CoursesComponent;

}
