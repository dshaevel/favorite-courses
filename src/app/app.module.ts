/* Third-party */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

/* App */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { CoursesService } from './courses/courses.service';

/* Components */
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    /* Third-party */
    BrowserModule,
    HttpClientModule,
    /* Modules */
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
