import { Component, OnInit } from '@angular/core';
import { CourseService } from "../course.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: [
  ]
})
export class ResumeComponent implements OnInit {

  public courseList:any[] = [];
  public lastCourse:any = {};

  constructor(private _courseService: CourseService) {

  }

  ngOnInit() {
    this.courseList = this._courseService.getCourseList();
    this.lastCourse = this.courseList[this.courseList.length - 1];
  }

  // Function to know if the course is the last one
  isLastCourse(course:any):boolean {
    return !(course === this.lastCourse);
  }
}
