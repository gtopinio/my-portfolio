import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styles: [
  ]
})
export class ProjectDetailsComponent implements OnInit{
  projects: {id: number, header:string, subheader:string, description:string, image:string, link:string}[];
  activatedRoute:any = '';

  constructor(private _projectService: ProjectService, private _route:ActivatedRoute) {
    this.projects = this._projectService.getProjects();
    this._route.params.subscribe(params => {
      this.activatedRoute = params['id'];
    });
  }

  ngOnInit() {
    console.log(this.activatedRoute);
  }

}
