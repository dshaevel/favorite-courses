import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'favorite-courses-add-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(private router: Router) {}

  @ViewChild(CoursesComponent) coursesComponent: CoursesComponent;

  onDoneClick() {
    console.log('FavoritesComponent::onDoneClick()');
    this.router.navigate(['/summary']);
  }
}
