import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routingComponents } from "./app-routing.module";
import { NgOptimizedImage } from "@angular/common";
import { CourseService } from "./course.service";
import { NavigationService } from "./navigation.service";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from "primeng/dropdown";
import { AllprojectsComponent } from './allprojects/allprojects.component';
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContentLayoutComponent,
    NavigationComponent,
    routingComponents,
    AllprojectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
  ],
  providers: [
    CourseService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
