import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprojectsComponent } from './allprojects.component';

describe('AllprojectsComponent', () => {
  let component: AllprojectsComponent;
  let fixture: ComponentFixture<AllprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllprojectsComponent]
    });
    fixture = TestBed.createComponent(AllprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
