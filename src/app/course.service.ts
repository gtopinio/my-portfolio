import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList() {
    return [
      {
        "id": "CMSC 128",
        "name": "Introduction to Software Engineering",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2022-2023",
        "activities": [
          `Led a team to develop and deploy a MERN stack backend server for a Student Accommodation and Lodging System (STALS),
           achieving high uptime and enhancing security with JWT authentication.`,
          `Developed RESTful APIs using MySQL, ExpressJS, and NodeJS for STALS,
          optimizing performance and ensuring efficient data processing.`,
          `Implemented a persistent chat feature using Socket.io, enabling real-time
          communication between users of the STALS system.`
          ]
      },
      {
        "id": "CMSC 137",
        "name": "Data Communications and Networking",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2022-2023",
        "activities": [
          `Collaborated with a team to develop a networked game project using Java for a course,
           earning the best project award and delivering an engaging gaming experience with features like in-game chat and networked gameplay.`,
          `Implemented project tracking and version control using GitHub.,
          ensuring efficient collaboration and seamless integration of individual contributions.`,
        ]
      },
      {
        "id": "CMSC 142",
        "name": "Design and Analysis of Algorithms",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2022-2023",
        "activities": [
          `Developed a C program utilizing an iterative backtracking algorithm with modifications, including
           branch and bound, to create an efficient solver for the Partition problem.`,
          `Learned about the design and analysis of algorithms, including topics such as algorithmic complexity,
          sorting and searching algorithms, graph algorithms, and dynamic programming.`,
        ]
      },
      {
        "id": "CMSC 173",
        "name": "Human-Computer Interaction",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2022-2023",
        "activities": [
          `Conducted a comprehensive study on the impact of task management applications, evaluating the
          effectiveness of the ProgressPal app's features such as the Eisenhower Matrix, Kanban Board, "Wheel
          of Tasks", and a motivational feature in enhancing productivity, prioritizing tasks, and mitigating the
          challenges of unfinished tasks and procrastination among college students`,
        ]
      },
      {
        "id": "CMSC 180",
        "name": "Introduction to Parallel Computing",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2022-2023",
        "activities": [
          `Designed and implemented a server-client Java program for a Parallel Computing course, utilizing open
          sockets to establish efficient data communication between multiple instances, facilitating parallel
          processing and efficient computation for complex tasks in distributed computing environments.`,
          `Learned about the principles and techniques of parallel computing, parallel computational models,
           machine architectures, and performance models.`,
        ]
      },
      ]
  }
}
