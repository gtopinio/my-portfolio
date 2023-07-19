import { Component } from '@angular/core';
import { NavigationService } from "../navigation.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: [
  ]
})
export class PageNotFoundComponent {
  constructor(private _navigationService: NavigationService) {

  }

  changeToDefaultTab(){
    this._navigationService.setCurrentTab('About');
  }
}
