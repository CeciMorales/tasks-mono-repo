import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIndividualComponent } from './task-individual.component';

describe('TaskIndividualComponent', () => {
  let component: TaskIndividualComponent;
  let fixture: ComponentFixture<TaskIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
