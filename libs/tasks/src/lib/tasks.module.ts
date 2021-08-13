import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskActionsComponent } from './task-actions/task-actions.component';
import { TaskIndividualComponent } from './task-individual/task-individual.component';
import { UiSharedModule} from '../../../ui-shared/ui-shared.module';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { TaskSnackbarComponent } from './task-snackbar/task-snackbar.component';
import { TasksDashboardActionsComponent } from './tasks-dashboard-actions/tasks-dashboard-actions.component';

const EXPORTS = [
  TasksListComponent,
  TaskDetailComponent,
  TaskActionsComponent,
  TaskIndividualComponent
]

@NgModule({
  imports: [
    CommonModule,
    UiSharedModule
  ],
  exports: [...EXPORTS],
  declarations: [...EXPORTS, TaskModalComponent, TaskSnackbarComponent, TasksDashboardActionsComponent]
  

})
export class TasksModule {}
