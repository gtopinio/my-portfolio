import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent {
currentTab: string = 'About';
// Create 'navTabs' which is an array of objects. Each object has a 'id' and 'name' property for each tab.
// The 'id' property is the lowercase version of the 'name' property.
  navTabs: {id: string, name: string}[] = [
    {id: 'about', name: 'About'},
    {id: 'resume', name: 'Resume'},
    {id: 'projects', name: 'Projects'},
    {id: 'contact', name: 'Contact'},
  ];
@Output() public navigationEvent = new EventEmitter();

  isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  changeTab(tab: string): void {
    this.currentTab = tab;

    if(tab == 'About') {
      this.navigationEvent.emit(this.currentTab + ' Me');
    } else {
      this.navigationEvent.emit(this.currentTab);
    }
  }
}
