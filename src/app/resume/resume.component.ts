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

  constructor(private _courseService: CourseService) {

  }

  ngOnInit() {
    this.courseList = this._courseService.getCourseList();
  }
}
