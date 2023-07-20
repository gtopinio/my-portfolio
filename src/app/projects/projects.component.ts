import {Component, HostListener, OnInit} from '@angular/core';
import { NavigationService } from "../navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit{

  projectTabs: {id: string, name: string}[];
  selectedTab: any;
  innerWidth: any;

  constructor(private _router: Router, private _navigationService: NavigationService) {
    this.projectTabs = this._navigationService.getProjectTabs();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  showDropdown(){
    return (this.innerWidth >= 1110);
  }

  onDropDownChange(){
    this._router.navigate(['/projects', this.selectedTab.id])
  }

}
