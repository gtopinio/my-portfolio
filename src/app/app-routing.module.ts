import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent,
    children:
      [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: ':id', component: ProjectDetailsComponent },
      ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutComponent,
  ResumeComponent,
  ProjectsComponent,
  ContactComponent,
  PageNotFoundComponent,
  ProjectDetailsComponent,
];
