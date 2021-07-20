import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskActionsComponent } from './task-actions/task-actions.component';
import { TaskIndividualComponent } from './task-individual/task-individual.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TasksListComponent,
    TaskDetailComponent,
    TaskActionsComponent,
    TaskIndividualComponent
  ],
})
export class TasksModule {}
