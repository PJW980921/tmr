import express, { Request, Response } from 'express';
import cors from 'cors';
import { AuthController } from './controllers/auth';
import { createConnection } from 'typeorm';
import { User } from './entities/user';
import 'reflect-metadata';
import 'dotenv/config';

const app = express();
const PORT = 3099;

// Database connection
createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log('Database Connected');

    app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.post('/register', (req: Request, res: Response) => {
      AuthController.register(req, res);
    });

    app.listen(PORT, () => {
      console.log(`-------------서버가 생성 되었습니다.-------------`);
    });
  })
  .catch((error) => {
    console.log('데이터 베이스 연결 실패:', error);
  });
