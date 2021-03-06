/* Third-party */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

/* App */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { CoursesResolver } from './courses/courses-resolver.service';
import { CoursesService } from './courses/courses.service';
import { SigninService } from './signin/signin.service';

/* Components */
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SummaryComponent } from './summary/summary.component';

import { SearchPipe } from './search.pipe';
import { TrimPipe } from './trim.pipe';

@NgModule({
  imports: [
    /* Third-party */
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /* Modules */
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    CoursesContainerComponent,
    FavoritesComponent,
    HomeComponent,
    SigninComponent,
    SummaryComponent,
    SearchPipe,
    TrimPipe
  ],
  providers: [CoursesService, CoursesResolver, SigninService],
  bootstrap: [AppComponent]
})
export class AppModule {}
