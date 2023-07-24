import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routingComponents } from "./app-routing.module";

import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

import { NgOptimizedImage } from "@angular/common";
import { CourseService } from "./course.service";
import { NavigationService } from "./navigation.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from "primeng/dropdown";
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CardModule } from "primeng/card";
import { ScrollTopModule } from "primeng/scrolltop";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule} from "primeng/button";
import { GraphQLModule } from './graphql.module';
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContentLayoutComponent,
    NavigationComponent,
    routingComponents,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
    ScrollTopModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ApolloModule,
    HttpClientModule,
    GraphQLModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    CourseService,
    NavigationService,
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
