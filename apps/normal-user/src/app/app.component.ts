import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Task } from '@tasks-app/api-interfaces';

@Component({
  selector: 'tasks-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  tasks$ = this.http.get<Task[]>('/api/tasks');
  constructor(private http: HttpClient) {}
}
