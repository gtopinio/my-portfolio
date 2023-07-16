import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routingComponents } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContentLayoutComponent,
    NavigationComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
