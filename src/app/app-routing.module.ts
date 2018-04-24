import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesResolver } from './courses/courses-resolver.service';

import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
    { path: '', component: SigninComponent},
    {
        path: 'courses',
        children: [
            { path: '', component: CoursesContainerComponent },
            { path: ':id', component: CourseComponent, resolve: { course: CoursesResolver} }
        ]
    },
    { path: 'favorites', component: FavoritesComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SigninComponent },
    { path: 'summary', component: SummaryComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
