import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: {
    header: string,
    subheader:string,
    description:string,
    image:string,
    link:string,
    type:string,

    }[] =
    [
      {
        header: 'Code Vault',
        subheader: 'Encrypted Password Generator and Manager',
        description: 'A Next.js web application that allows users to generate and manage their passwords. It also encrypts the passwords using crypto and stores them in a MongoDB database.',
        image: 'assets/images/default-project-image.png',
        link: 'https://code-vault-gtopinio.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
        header: 'My Portfolio',
        subheader: 'Personal Website',
        description: 'An Angular web application that showcases my personal information, skills, and projects. It also handles the contact form for users to send messages to my email using Spring Boot.',
        image: 'assets/images/default-project-image.png',
        link: 'https://mark-genesis-topinio.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
      header: 'ELBNB',
      subheader: 'Student Accommodation and Lodging System',
      description: 'A web application that allows students to find accommodation and lodging within or outside the campus of University of the Philippines Los Baños.',
      image: 'assets/images/default-project-image.png',
      link: 'https://github.com/gtopinio/elbnb-backend-128',
      type: 'web-mobile-dev',
      },
      {
        header: 'Elemental Odyssey ',
        subheader: 'Networked Java Game',
        description: 'A 2D multiplayer platformer game that allows players to choose a character with unique abilities and race against each other to reach the end of the level.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/PERSEUS-1337/cmsc137-elemental-odyssey',
        type: 'socket',
      },
      {
        header: 'Partition Problem Solver',
        subheader: 'Iterative Backtracking Algorithm',
        description: 'A C program that uses a modified backtracking method to efficiently solve the Partition problem.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/partition-problem-solver',
        type: 'others',
      },
      {
        header: 'ProgressPal',
        subheader: 'Task Management Solution',
        description: 'Study on the impact of ProgressPal app in improving productivity and organization among college students. Explored features like Eisenhower Matrix, Kanban Board, "Wheel of Tasks," and motivation to prioritize tasks and reduce procrastination.',
        image: 'assets/images/default-project-image.png',
        link: 'https://youtu.be/bVx4n5lUdMw',
        type: 'others',
      },
      {
        header: 'Socket Matrix Distribution',
        subheader: 'Parallel Computing Application',
        description: 'Designed and implemented a server-client Java program for a Parallel Computing course, utilizing open sockets to establish efficient data communication between multiple instances, facilitating parallel processing and efficient computation for complex tasks in distributed computing environments.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/socket-matrix-distribution',
        type: 'socket',
      },
      {
        header: 'PuhonReact',
        subheader: 'Social Media Web Application',
        description: 'A MERN-stack social media application that allows users to sign-up, log-in, view, create, edit, and delete their own posts. It is also integrated with authentication for a robust verification of valid users.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/puhon-react',
        type: 'web-mobile-dev',
      },
      {
        header: '8 Puzzle Game',
        subheader: 'Iterative Deepening A*, BFS, and DFS Algorithm',
        description: 'A C program that uses Iterative Deepening A*, BFS, and DFS to solve the 8 Puzzle Game.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/8-Puzzle-Game',
        type: 'ai',
      },
      {
        header: 'Tic-Tac-Toe Game',
        subheader: 'MinMax Algorithm',
        description: 'A Java program that uses MinMax Algorithm to solve the Tic-Tac-Toe Game.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/Tic-Tac-Toe-Game',
        type: 'ai',
      },
      {
        header: 'QSI and Simplex Calculator',
        subheader: 'R Shiny Application',
        description: 'An R Shiny application that allows users to solve for the optimal solution of a problem of creating a smooth curve that passes through a set of data points and linear programming problem using the Quadratic Simplex Method and Simplex Method respectively.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/qsi-and-simplex-calculator-r-shiny',
        type: 'data-science',
      },
      {
        header: 'Super Dead Gunner',
        subheader: 'Java Mini-Shooting Game',
        description: 'A Java mini-shooting game that allows players to shoot aliens using a Gunner character. It is integrated with a scoring system and a boss level.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/mini-shooting-game',
        type: 'others',
      },
      {
        header: 'LAPERA',
        subheader: 'Python Console Shopping App',
        description: 'A Python console shopping app, similar to LAZADA. It caters to both Sellers and Buyers, and there can be many sellers and buyers registered in the app.',
        image: 'assets/images/default-project-image.png',
        link: 'https://github.com/gtopinio/lapera-project-py',
        type: 'others',
      },
    ]

  constructor() { }

  getProjects(): {header:string, subheader:string, description:string, image:string, link:string, type:string}[] {
    return this.projects;
  }
}
