import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSnackbarComponent } from './task-snackbar.component';

describe('TaskSnackbarComponent', () => {
  let component: TaskSnackbarComponent;
  let fixture: ComponentFixture<TaskSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
