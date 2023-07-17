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
          ` Led a team to develop and deploy a MERN stack backend server for a Student Accommodation and Lodging System (STALS),
           achieving high uptime and enhancing security with JWT authentication.`,
          ` Developed RESTful APIs using MySQL, ExpressJS, and NodeJS for STALS,
          optimizing performance and ensuring efficient data processing.`,
          ` Implemented a persistent chat feature using Socket.io, enabling real-time
          communication between users of the STALS system.`
          ]
      },
      ]
  }
}
