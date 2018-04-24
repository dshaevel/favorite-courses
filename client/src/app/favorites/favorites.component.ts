import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'favorite-courses-add-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  constructor(private router: Router, private coursesService: CoursesService) {}

  onDoneClick() {
    this.router.navigate(['/summary']);
  }
}
