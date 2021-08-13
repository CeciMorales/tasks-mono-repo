import { Component, Input, OnInit } from '@angular/core';
import { Task } from '@tasks-app/api-interfaces';

@Component({
  selector: 'tasks-app-task-individual',
  templateUrl: './task-individual.component.html',
  styleUrls: ['./task-individual.component.scss']
})
export class TaskIndividualComponent implements OnInit {

  @Input() task: Task = {
    id: '',
    description: '',
    image: '',
    favorite: false,
    completed: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
