import {Component, OnInit} from '@angular/core';
import { NavigationService } from "../navigation.service";
import {Apollo} from "apollo-angular";
import { SAVE_CLICK } from "../graphql.operations";
import { ClickInput } from "../graphql.types";
import { firstValueFrom } from "rxjs";

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
    try {
      // Check if linkName is null
      if (linkName === null) {
        // Handle null value appropriately
        // For example, provide a default value or display an error message to the user
        console.error('linkName is null');
        return;
      }

      // Create new ClickInput object
      const clickInput: ClickInput = {
        linkName: linkName,
      }

      // Save click to database
      await firstValueFrom(
        this.apollo.mutate({
          mutation: SAVE_CLICK,
          variables: {
            click: clickInput,
          },
        })
      )

    } catch (error) {
      // Error includes declaration of a non-null type, to be fixed in a future version.
    }
  }

}
