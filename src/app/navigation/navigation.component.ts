import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent {
  currentTab: string = 'About';
  navTabs: string[] = ['About','Resume', 'Projects', 'Contact'];
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
