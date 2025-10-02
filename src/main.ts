import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Получаем разрешенные origins из переменных окружения
  const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3005',
        'https://webdesign-ecourses.com',
        'https://www.webdesign-ecourses.com',
        'https://api.webdesign-ecourses.com'
      ]; // fallback для разработки

  // Настройка CORS
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'X-Requested-With',
      'Accept',
      'Origin'
    ],
    credentials: true,
  });
  
  const port = process.env.PORT || 3005;
  await app.listen(port);
  
  console.log(`🚀 Webdesign Ecourses Backend запущен на порту ${port}`);
  console.log(`🌐 CORS разрешен для: ${allowedOrigins.join(', ')}`);
  console.log(`📊 База данных: webdesign_ecourses_db (SQLite - автосоздание)`);
}
bootstrap();
