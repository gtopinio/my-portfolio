import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: {
    id: number,
    header: string,
    subheader:string,
    description:string,
    image:string,
    link:string,
    type:string,

    }[] =
    [
      {
      id: 1,
      header: 'ELBNB',
      subheader: 'Student Accommodation and Lodging System',
      description: 'A web application that allows students to find accommodation and lodging within or outside the campus of University of the Philippines Los Baños.',
      image: 'assets/images/default-project-image.png',
      link: 'https://github.com/gtopinio/elbnb-backend-128',
      type: 'web-mobile-dev',
      },
      {
        id: 2,
        header: 'Elemental Odyssey ',
        subheader: 'Networked Java Game',
        description: 'A 2D multiplayer platformer game that allows players to choose a character with unique abilities and race against each other to reach the end of the level.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/PERSEUS-1337/cmsc137-elemental-odyssey',
        type: 'socket',
      },
      {
        id: 3,
        header: 'Partition Problem Solver',
        subheader: ' Iterative Backtracking Algorithm',
        description: 'A C program that uses a modified backtracking method to efficiently solve the Partition problem.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/partition-problem-solver',
        type: 'others',
      },
    ]

  constructor() { }

  getProjects(): {id: number, header:string, subheader:string, description:string, image:string, link:string, type:string}[] {
    return this.projects;
  }
}
