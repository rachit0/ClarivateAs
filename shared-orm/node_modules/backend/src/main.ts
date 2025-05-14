import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeDatabase } from 'shared-orm';
import * as cors from 'cors';

async function bootstrap() {
  await initializeDatabase();
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(3000);
}
bootstrap();