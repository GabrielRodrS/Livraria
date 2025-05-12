/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:3001' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
  app.enableCors({ origin: frontendUrl });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
