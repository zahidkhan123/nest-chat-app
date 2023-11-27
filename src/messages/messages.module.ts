import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from 'src/database/database.module';
import { messageProviders } from './messages.providers';
import { MessageService } from './messages.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...messageProviders,
    MessageService
  ],
  controllers: [MessagesController]
})
export class MessagesModule { }
