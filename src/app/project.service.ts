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
        header: 'Custom KeyCloak Server',
        subheader: 'Secure Identity and Access Management',
        description: 'A cost-effective, open-source identity and access management solution, deployed using Docker and Google Cloud Platform at no cost.',
        image: 'assets/images/project-keycloak.png',
        link: 'https://auth.genesis.pbxrus.com',
        type: 'others',
      },
      {
        header: 'Aora',
        subheader: 'A Hub for AI-Generated Video Sharing',
        description: 'A React Native mobile application that allows users to create, share, and watch AI-generated videos. It is integrated with AppWrite for user authentication and video storage. It also uses the NativeWind and Animatable libraries for a smooth and responsive user interface.',
        image: 'assets/images/project-aora.png',
        link: 'https://github.com/gtopinio/react-native-aora',
        type: 'web-mobile-dev',
      },
      {
        header: 'OSES Connect',
        subheader: 'Centralized Attendance Management System',
        description: 'A cost-effective web-based system that streamlines attendance management at Ortiz-Saranay Elementary School by digitizing the process with QR codes and a Markov Chain model for absenteeism prediction. It enhances parental monitoring through SMS notifications and improves data management with comprehensive report generation.',
        image: 'assets/images/project-oses-connect.png',
        link: 'https://oses-connect.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
        header: 'Omeglee',
        subheader: 'Omegle-like Chat Web Application',
        description: 'A web application that allows users to chat with random people. It is integrated with WebSockets for real-time communication.',
        image: 'assets/images/project-omeglee.jpg',
        link: 'https://omeglee.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
        header: 'ProgressPal - Web Application',
        subheader: 'Lite and Easy-to-use Task Management Solution',
        description: 'An Angular and Spring Boot web application that allows users to create, edit, and delete tasks. It also has a Kanban Board that allows users to move tasks from one column to another. It is integrated with Google Single Sign-On and has a user-friendly interface. Users can use the app even without signing in.',
        image: 'assets/images/project-progresspal_web.jpg',
        link: 'https://progresspal.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
        header: 'Code Vault',
        subheader: 'Encrypted Password Generator and Manager',
        description: 'A Next.js web application that allows users to generate and manage their passwords. It also encrypts the passwords using crypto and stores them in a MongoDB database.',
        image: 'assets/images/project-code_vault.jpg',
        link: 'https://code-vault-gtopinio.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
        header: 'My Portfolio',
        subheader: 'Personal Website',
        description: 'An Angular web application that showcases my personal information, skills, and projects. It also handles the contact form for users to send messages to my email using Spring Boot.',
        image: 'assets/images/project-myportfolio.jpg',
        link: 'https://mark-genesis-topinio.vercel.app/',
        type: 'web-mobile-dev',
      },
      {
      header: 'ELBNB',
      subheader: 'Student Accommodation and Lodging System',
      description: 'A web application that allows students to find accommodation and lodging within or outside the campus of University of the Philippines Los Baños.',
      image: 'assets/images/project-elbnb.jpg',
      link: 'https://github.com/gtopinio/elbnb-backend-128',
      type: 'web-mobile-dev',
      },
      {
        header: 'Elemental Odyssey ',
        subheader: 'Networked Java Game',
        description: 'A 2D multiplayer platformer game that allows players to choose a character with unique abilities and race against each other to reach the end of the level.',
        image: 'assets/images/project-elemental_odyssey.jpg',
        link: 'https://github.com/PERSEUS-1337/cmsc137-elemental-odyssey',
        type: 'socket',
      },
      {
        header: 'Partition Problem Solver',
        subheader: 'Iterative Backtracking Algorithm',
        description: 'A C program that uses a modified backtracking method to efficiently solve the Partition problem.',
        image: 'assets/images/project-partition_problem.jpg',
        link: 'https://github.com/gtopinio/partition-problem-solver',
        type: 'others',
      },
      {
        header: 'ProgressPal',
        subheader: 'Task Management Solution',
        description: 'Study on the impact of ProgressPal app in improving productivity and organization among college students. Explored features like Eisenhower Matrix, Kanban Board, "Wheel of Tasks," and motivation to prioritize tasks and reduce procrastination.',
        image: 'assets/images/project-progresspal.jpg',
        link: 'https://youtu.be/bVx4n5lUdMw',
        type: 'others',
      },
      {
        header: 'Socket Matrix Distribution',
        subheader: 'Parallel Computing Application',
        description: 'Designed and implemented a server-client Java program for a Parallel Computing course, utilizing open sockets to establish efficient data communication between multiple instances, facilitating parallel processing and efficient computation for complex tasks in distributed computing environments.',
        image: 'assets/images/project-socket_matrix.jpg',
        link: 'https://github.com/gtopinio/socket-matrix-distribution',
        type: 'socket',
      },
      {
        header: 'PuhonReact',
        subheader: 'Social Media Web Application',
        description: 'A MERN-stack social media application that allows users to sign-up, log-in, view, create, edit, and delete their own posts. It is also integrated with authentication for a robust verification of valid users.',
        image: 'assets/images/project-puhon_react.jpg',
        link: 'https://github.com/gtopinio/puhon-react',
        type: 'web-mobile-dev',
      },
      {
        header: '8 Puzzle Game',
        subheader: 'Iterative Deepening A*, BFS, and DFS Algorithm',
        description: 'A C program that uses Iterative Deepening A*, BFS, and DFS to solve the 8 Puzzle Game.',
        image: 'assets/images/project-8_puzzle.jpg',
        link: 'https://github.com/gtopinio/8-Puzzle-Game',
        type: 'ai',
      },
      {
        header: 'Tic-Tac-Toe using MinMax Algorithm',
        subheader: 'MinMax Algorithm',
        description: 'A Java program that uses MinMax Algorithm to solve the Tic-Tac-Toe Game.',
        image: 'assets/images/project-minmax.jpg',
        link: 'https://github.com/gtopinio/Tic-Tac-Toe_MinMax',
        type: 'ai',
      },
      {
        header: 'QSI and Simplex Calculator',
        subheader: 'R Shiny Application',
        description: 'An R Shiny application that allows users to solve for the optimal solution of a problem of creating a smooth curve that passes through a set of data points and linear programming problem using the Quadratic Simplex Method and Simplex Method respectively.',
        image: 'assets/images/project-qsi_simplex.jpg',
        link: 'https://github.com/gtopinio/qsi-and-simplex-calculator-r-shiny',
        type: 'data-science',
      },
      {
        header: 'Super Dead Gunner',
        subheader: 'Java Mini-Shooting Game',
        description: 'A Java mini-shooting game that allows players to shoot aliens using a Gunner character. It is integrated with a scoring system and a boss level.',
        image: 'assets/images/project-super_dead_gunner.png',
        link: 'https://github.com/gtopinio/mini-shooting-game',
        type: 'others',
      },
      {
        header: 'LAPERA',
        subheader: 'Python Console Shopping App',
        description: 'A Python console shopping app, similar to LAZADA. It caters to both Sellers and Buyers, and there can be many sellers and buyers registered in the app.',
        image: 'assets/images/project-lapera.jpg',
        link: 'https://github.com/gtopinio/lapera-project-py',
        type: 'others',
      },
    ]

  constructor() { }

  getProjects(): {header:string, subheader:string, description:string, image:string, link:string, type:string}[] {
    return this.projects;
  }
}
