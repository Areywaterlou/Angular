import { Component, inject } from '@angular/core';
import { MessageService } from '../../services/message-service';

@Component({
  imports: [],
  selector: 'app-messages',
  styleUrl: './messages.css',
  templateUrl: './messages.html',
})
export class Messages {
  public messageService = inject(MessageService);

  removeMessage(index: number) {
    this.messageService.messages.update(msgs => msgs.filter((_, i) => i !== index));
  }
}