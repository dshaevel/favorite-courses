import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CoursesService } from './courses.service';

import { Course } from './course.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesResolver implements Resolve<Course> {
    constructor(private coursesService: CoursesService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Course> | Promise<Course> | Course {
        if ('' + route.queryParams.create === '' + true) {
            return new Course({});
        }
        return this.coursesService.getById(route.params['id']);
    }
}
