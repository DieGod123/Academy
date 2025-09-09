import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Academy API')
    .setDescription('API para gestión de estudiantes de la academia')
    .setVersion('1.0')
    .addTag('students', 'Operaciones relacionadas con estudiantes')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Aplicación ejecutándose en: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Documentación Swagger disponible en: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
