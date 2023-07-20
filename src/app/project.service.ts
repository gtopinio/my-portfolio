import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: {id: number, header: string, subheader:string, description:string, image:string, link:string}[] =
    [
      {
      id: 1,
      header: 'ELBNB',
      subheader: 'Student Accommodation and Lodging System',
      description: ' A web application that allows students to find accommodation and lodging within or outside the campus of University of the Philippines Los Baños.',
      image: 'assets/images/default-project-image.png',
      link: 'https://github.com/gtopinio/elbnb-backend-128'
      },
    ]

  constructor() { }

  getProjects(): {id: number, header:string, subheader:string, description:string, image:string, link:string}[] {
    return this.projects;
  }
}
