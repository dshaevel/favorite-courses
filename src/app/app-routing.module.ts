import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
    { path: '', component: SigninComponent},
    { path: 'favorites', component: FavoritesComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
