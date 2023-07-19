import { Component } from '@angular/core';
import { NavigationService } from "../navigation.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent {

  constructor(private _navigationService: NavigationService) {

  }

  changeToDefaultTab(){
    this._navigationService.setCurrentTab('About');
  }

}
