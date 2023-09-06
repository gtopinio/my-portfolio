import {Component, OnInit} from '@angular/core';
import { NavigationService } from "../navigation.service";
import {Apollo} from "apollo-angular";
import { SAVE_CLICK } from "../graphql.operations";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent implements OnInit{
currentTab: string = '';
// Create 'navTabs' which is an array of objects. Each object has a 'id' and 'name' property for each tab.
// The 'id' property is the lowercase version of the 'name' property.
  navTabs: {id: string, name: string}[] = [
    {id: 'about', name: 'About'},
    {id: 'resume', name: 'Resume'},
    {id: 'projects', name: 'Projects'},
    {id: 'contact', name: 'Contact'},
  ];

  constructor(private _navigationService: NavigationService,
              private apollo: Apollo,
  ) {

  }

  ngOnInit() {
    // any component that triggers the navigation service to change the current tab will
    // update the currentTab property in this component
    this._navigationService.currentTab$.subscribe((ct) => {
      this.currentTab = ct;
    })
  }

  isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  async changeTab(tab: string): Promise<void> {
    this.currentTab = tab;
    await this.onClickLink(tab);

  }

  async onClickLink(linkName: string): Promise<void> {
    // Create new ClickInput object
    const clickInput = {
      linkName: linkName
    };

    // Save click to database
    await this.apollo.mutate({
      mutation: SAVE_CLICK,
      variables: {
        click: clickInput,
      },
    }).toPromise();

  }
}
