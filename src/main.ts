import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { config } from 'dotenv';
async function bootstrap() {

  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
  config()
}
bootstrap();
