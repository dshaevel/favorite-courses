/* Third-party */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

/* App */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { CoursesService } from './courses/courses.service';

/* Components */
import { SigninComponent } from './signin/signin.component';

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
    SigninComponent
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
