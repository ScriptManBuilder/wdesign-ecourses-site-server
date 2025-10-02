# Python Learning Server

## Описание
Backend API сервер для Python Learning Platform - образовательная платформа для изучения Python.

## Настройка

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменные окружения в файле `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/python_learning_db"
JWT_SECRET="python_learning_jwt_secret_key_2024_unique_secure_random_string_abc123456"
PORT=3003
ALLOWED_ORIGINS="http://localhost:3000,http://localhost:3001,http://localhost:3003,https://python-learning.com"
```

3. Запустите миграции базы данных:
```bash
npx prisma migrate dev
```

4. Запустите сервер:
```bash
npm run start:dev
```

## Порты и URLs
- Сервер работает на порту: **3003**
- API доступно по адресу: `http://localhost:3003`
- База данных: `python_learning_db`

## Особенности проекта
- Уникальный порт (3003)
- Собственная база данных (`python_learning_db`)
- Уникальные JWT секреты
- Настройки CORS для python-learning доменов
- Полная изоляция от других проектов

## API Endpoints
- `POST /auth/login` - Авторизация пользователей
- `POST /auth/signup` - Регистрация новых пользователей
- `GET /users/profile` - Получение профиля пользователя
- `PUT /users/profile` - Обновление профиля пользователя

## Технологии
- **NestJS** - Node.js фреймворк
- **Prisma** - ORM для работы с базой данных
- **PostgreSQL** - Система управления базами данных
- **JWT** - Аутентификация и авторизация
- **bcrypt** - Хеширование паролей

Этот сервер полностью независим и изолирован от других проектов.