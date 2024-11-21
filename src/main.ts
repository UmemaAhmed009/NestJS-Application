import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //the app is being instantiated here
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//strips out elements not defined in our dto(data transfer object)
  }))
  await app.listen(3333);//we are launching server on port 3000
}
bootstrap();
