import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private messageService: MessageService) {}

  sayHello() {
    return this.messageService.getMessage();
  }
}
