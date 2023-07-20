import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private projectTabs: {id: string, name: string}[] = [
    {id: 'all', name: 'All'},
    {id: 'web-mobile-dev', name: 'Web/Mobile Development'},
    {id: 'socket', name: 'Socket Programming'},
    {id: 'ai', name: 'Artificial Intelligence'},
    {id: 'data-science', name: 'Data Science'},
    ]

  private currentTabSource = new BehaviorSubject<string>('About')
  currentTab$ = this.currentTabSource.asObservable();
  constructor() { }

  getProjectTabs(): {id: string, name: string}[] {
    return this.projectTabs;
  }

  setCurrentTab(tab: string): void {
    this.currentTabSource.next(tab)
  }
}
