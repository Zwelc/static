import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  const prefix = 'api';
  app.setGlobalPrefix(prefix);
  const config = new DocumentBuilder()
    .setTitle('Static API')
    .setDescription('The Static API description')
    .setVersion('1.0')

    .build();

  const document = SwaggerModule.createDocument(app, config);
  const PORT = process.env.PORT || 8080;

  SwaggerModule.setup(`${prefix}/docs`, app, document);
  await prismaService.enableShutdownHooks(app);
  await app.listen(PORT);
}
bootstrap();
