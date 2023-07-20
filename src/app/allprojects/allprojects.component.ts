import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styles: [
  ]
})
export class AllprojectsComponent implements OnInit{
  projects: {id: number, header:string, subheader:string, description:string, image:string, link:string}[];
  constructor(private _projectService: ProjectService) {
    this.projects = this._projectService.getProjects();
  }

  ngOnInit() {
  }
}
