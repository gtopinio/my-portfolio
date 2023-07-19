import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentTabSource = new BehaviorSubject<string>('About')
  currentTab$ = this.currentTabSource.asObservable();
  constructor() { }

  getCurrentTab(): BehaviorSubject<string> {
    return this.currentTabSource;
  }

  setCurrentTab(tab: string): void {
    this.currentTabSource.next(tab)
  }
}
