import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Messages } from "./messages.entity";

export class MessageService {

    constructor(
        @Inject("MESSAGES_REPOSITORY")
        private repository: Repository<Messages>
    ) {


    }

    public listMessages() {
        return this.repository.find()
    }

    public getMessage(id: number) {
        return this.repository.findOne({ where: { id } })
    }
    public createMessage = async (message: string) => {
        const data = { content: message }
        const newMessage = this.repository.create(data);
        const savedMessage = await this.repository.save(newMessage);
        return savedMessage;
    }
}