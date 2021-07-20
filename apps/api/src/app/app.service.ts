import { Injectable } from '@nestjs/common';
import { Message, Task } from '@tasks-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getTasks(): Task[] {
    return [
      {
        id: '1',
        description: 'first task',
        image: 'https://mundopug.info/wp-content/uploads/2020/11/Pug-blanco.jpg',
        favorite: true
      },
      {
        id: '2',
        description: 'second task',
        image: 'https://t1.ea.ltmcdn.com/es/images/2/1/9/nombres_para_perros_pug_23912_orig.jpg',
        favorite: false
      }
    ]
  }
}
