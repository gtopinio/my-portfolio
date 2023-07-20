import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private projectTabs =
    [
      "All",
      "Web/Mobile Development",
      "Socket Programming",
      "Artificial Intelligence",
      "Data Science",
      "Others"
    ];

  private currentTabSource = new BehaviorSubject<string>('About')
  currentTab$ = this.currentTabSource.asObservable();
  constructor() { }

  getProjectTabs(): string[] {
    return this.projectTabs;
  }

  setCurrentTab(tab: string): void {
    this.currentTabSource.next(tab)
  }
}
