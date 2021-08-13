import { Injectable } from '@nestjs/common';
import { Message, Task } from '@tasks-app/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  URL_DB = 'http://localhost:3000';
  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL_DB);
  }
}
