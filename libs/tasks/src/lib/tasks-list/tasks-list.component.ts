import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@tasks-app/api-interfaces';

@Component({
  selector: 'tasks-app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  tasks$ = this.http.get<Task[]>('/api/tasks');
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

}
