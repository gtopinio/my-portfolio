import { Component } from '@angular/core';
import { NavigationService } from "../navigation.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent {

  projectTabs: string[];
  showDropdown: boolean = false;

  constructor(private _navigationService: NavigationService) {
    this.projectTabs = this._navigationService.getProjectTabs();
  }

  changeToDefaultTab(){
    this._navigationService.setCurrentTab('About');
  }

}
