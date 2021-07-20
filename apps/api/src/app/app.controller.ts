import { Controller, Get } from '@nestjs/common';

import { Message, Task } from '@tasks-app/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('tasks')
  getTasks(): Task[] {
    return this.appService.getTasks();

  }
}
