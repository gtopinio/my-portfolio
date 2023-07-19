import { Component } from '@angular/core';
import { NavigationService } from "../navigation.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {
  constructor(private _navigationService: NavigationService) {

  }

  changeToDefaultTab(){
    this._navigationService.setCurrentTab('About');
  }
}
