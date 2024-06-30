import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList() {
    return [
      {
        "id": "CS50",
        "name": "Introduction to Computer Science",
        "school": "Harvard University",
        "year": "1st Semester 2023-2024",
        "activities": [
          "Learned about the fundamentals of computer science, including topics such as algorithms, data structures, and various programming languages.",
          "Developed a range of projects, including a web application for a finance portfolio, a Python-based game of Hangman, and a C-based spell checker.",
          "Revisited the basics of Python, C, and SQL, and learned about HTML, CSS, JavaScript, and Flask.",
        ]
      },
      {
        "id": "CMSC 165",
        "name": "Digital Image Processing",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2023-2024",
        "activities": [
          "Learned about the methods for acquiring, creating, manipulating, enhancing, and analyzing digital images.",
          "Developed a simple Python program to detect jeepneys in a live video feed using OpenCV and CUDA while providing real-time notifications to the user.",
        ]
      },
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
          `Designed and implemented a server-client Java program utilizing open
          sockets to establish efficient data communication between multiple instances, facilitating parallel
          processing and efficient computation for complex tasks in distributed computing environments.`,
          `Learned about the principles and techniques of parallel computing, parallel computational models,
           machine architectures, and performance models.`,
        ]
      },
      {
        "id": "CMSC 170",
        "name": "Introduction to Artificial Intelligence",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2022-2023",
        "activities": [
          `Successfully completed a range of exercises in an Introduction to Artificial Intelligence course,
          demonstrating proficiency in developing a user interface for an Eight-Puzzle game and implementing
          algorithms like BFS, DFS, A*, and MinMax to solve various AI problems.`,
        ]
      },
      {
        "id": "CMSC 142",
        "name": "Automata and Language Theory",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2022-2023",
        "activities": [
          `Analyzed and designed finite automata, context-free grammars, and pushdown automata`,
        ]
      },
      {
        "id": "CMSC 132",
        "name": "Computer Architecture",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2022-2023",
        "activities": [
          `Explored computer architecture, analyzing system performance and studying topics like
          instruction sets, memory management, and input/output systems.`,
        ]
      },
      {
        "id": "CMSC 125",
        "name": "Operating Systems",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2022-2023",
        "activities": [
          `Learned about operating systems, particularly Linux,
          including topics such as process and memory management, file systems, and security.`,
        ]
      },
      {
        "id": "CMSC 124",
        "name": "Design and Implementation of Programming Languages",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2022-2023",
        "activities": [
          `Built language interpreters or compilers, gaining hands-on experience with language
          implementation.`,
        ]
      },
      {
        "id": "CMSC 131",
        "name": "Introduction to Computer Organization and Machine-Level Programming",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2021-2022",
        "activities": [
          `Experienced in machine-level programming and debugging using assembly language and tools.`,
        ]
      },
      {
        "id": "CMSC 127",
        "name": "File Processing and Database Systems",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2021-2022",
        "activities": [
          `Explored topics such as data models, database design, and SQL queries.`,
          `Developed a task record system application integrated with CRUD operations and an SQL database`,
        ]
      },
      {
        "id": "CMSC 100",
        "name": "Web Programming",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2021-2022",
        "activities": [
          `Learned about the principles and techniques of web programming and explored topics such as HTML, CSS, and JavaScript`,
          `Developed a social media web app with CRUD operations using ReactJS and ExpressJS`,
        ]
      },
      {
        "id": "CMSC 23",
        "name": "Mobile Computing",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2021-2022",
        "activities": [
          `Learned about mobile application development, mobile operating systems, and mobile networking.`,
          `Developed a mobile social media app using Flutter with SQLite`,
        ]
      },
      {
        "id": "CMSC 150",
        "name": "Numerical and Symbolic Computation",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2021-2022",
        "activities": [
          `Developed a stand-alone application using R with a user interface for the Quadratic Spline
          Interpolation and the Simplex Method`,
        ]
      },
      {
        "id": "CMSC 130",
        "name": "Logic Design and Digital Computer Circuits",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2021-2022",
        "activities": [
          `Experienced digital circuit design, including number systems, Boolean algebra, and sequential circuits.`,
        ]
      },
      {
        "id": "CMSC 123",
        "name": "Data Structures",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2021-2022",
        "activities": [
          `Experienced in implementing data structures and selecting appropriate algorithms for programming projects.`,
        ]
      },
      {
        "id": "CMSC 22",
        "name": "Object-Oriented Programming",
        "school": "University of the Philippines Los Baños",
        "year": "1st Semester 2021-2022",
        "activities": [
          `Learned about object-oriented design principles, classes and objects, inheritance, polymorphism, and encapsulation`,
          `Developed a mini-shooting game using Java.`,
        ]
      },
      {
        "id": "CMSC 57",
        "name": "Discrete Mathematical Structures in Computer Science II",
        "school": "University of the Philippines Los Baños",
        "year": "Midyear 2021",
        "activities": [
          `Explored discrete mathematics and its connection to computer science,
          covering graph theory, algorithms, and formal languages.`,
        ]
      },
      {
        "id": "CMSC 21",
        "name": "Fundamentals of Programming",
        "school": "University of the Philippines Los Baños",
        "year": "Midyear 2021",
        "activities": [
          `Learned problem-solving, algorithm design, and C programming skills.`,
        ]
      },
      {
        "id": "CMSC 56",
        "name": " Discrete Mathematical Structures in Computer Science I",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2020-2021",
        "activities": [
          `Enhanced critical thinking and problem-solving skills through mathematical projects and assignments.`,
        ]
      },
      {
        "id": "CMSC 12",
        "name": "Foundations of Computer Science",
        "school": "University of the Philippines Los Baños",
        "year": "2nd Semester 2020-2021",
        "activities": [
          `Developed a shopping app project with product, sale, and seller-related functions using Python`,
        ]
      },
      ]
  }
}
