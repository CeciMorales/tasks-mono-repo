import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDashboardActionsComponent } from './tasks-dashboard-actions.component';

describe('TasksDashboardActionsComponent', () => {
  let component: TasksDashboardActionsComponent;
  let fixture: ComponentFixture<TasksDashboardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksDashboardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksDashboardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
