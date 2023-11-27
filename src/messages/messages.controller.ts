import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './messageDto/create-message.dto';
import { MessageService } from './messages.service';

@Controller('message')
export class MessagesController {
    constructor(
        private messageService: MessageService
    ) {

    }
    @Get()
    listMessages() {
        return this.messageService.listMessages()
    }

    @Get(':id')
    getMessage(@Param("id") id: number) {

        return this.messageService.getMessage(id)
    }


    @Post()
    createMessage(@Body() { content }: CreateMessageDTO) {

        return this.messageService.createMessage(content)
    }
}
