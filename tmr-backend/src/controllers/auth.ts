import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export class AuthController {
  static async register(req: Request, res: Response) {
    const userRepository = getRepository(User);

    try {
      const { email, password, nickname } = req.body;

      // 이메일 중복 체크
      const existingUser = await userRepository.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({
          status: 'error',
          message: '이미 등록된 이메일입니다.',
        });
      }

      // 비밀번호 해싱
      const hashedPassword = await bcrypt.hash(password, 10);

      // 새 사용자 생성
      const user = userRepository.create({
        email,
        password: hashedPassword,
        nickname,
      });

      await userRepository.save(user);

      // JWT 토큰 생성
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
      );

      return res.status(201).json({
        status: 'success',
        data: {
          user: {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
          },
          token,
        },
      });
    } catch (error) {
      console.error('Register error:', error);
      return res.status(500).json({
        status: 'error',
        message: '서버 오류가 발생했습니다.',
      });
    }
  }
}
