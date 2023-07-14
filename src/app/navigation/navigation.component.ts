import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent {
  currentTab: string = 'About';
  activeTab = 'text-white bg-blue';
  navTabs: string[] = ['About','Resume', 'Projects', 'Contact'];

  isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  changeTab(tab: string): void {
    this.currentTab = tab;
  }
}
