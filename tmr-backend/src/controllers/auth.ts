import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

interface SignupRequestBody {
  email: string;
  password: string;
  nickname: string;
}

interface PasswordValidationResult {
  isValid: boolean;
  message: string;
}

export class AuthController {
  static async signup(req: Request<{}, {}, SignupRequestBody>, res: Response) {
    const userRepository = getRepository(User);

    try {
      const { email, password, nickname } = req.body;

      // 이메일과 닉네임 중복 체크를 병렬로 실행
      const [existingEmail, existingNickname] = await Promise.all([
        userRepository.findOne({ where: { email } }),
        userRepository.findOne({ where: { nickname } }),
      ]);

      // 중복 검사
      if (existingEmail) {
        return res.status(400).json({
          status: 400,
          message: '이미 등록된 이메일입니다.',
        });
      }

      if (existingNickname) {
        return res.status(400).json({
          status: 400,
          message: '이미 사용 중인 닉네임입니다.',
        });
      }

      // 입력값 유효성 검사
      if (!isValidEmail(email)) {
        return res.status(400).json({
          status: 400,
          message: '유효하지 않은 이메일 형식입니다.',
        });
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        return res.status(400).json({
          status: 400,
          message: passwordValidation.message,
        });
      }

      if (!isValidNickname(nickname)) {
        return res.status(400).json({
          status: 400,
          message: '닉네임은 2-20자 사이여야 합니다.',
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

      const savedUser = await userRepository.save(user);

      // JWT 토큰 생성
      const token = jwt.sign(
        { userId: savedUser.id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
      );

      // 응답에서 비밀번호 필드 제외
      const { password: _, ...userWithoutPassword } = savedUser;

      return res.status(201).json({
        status: 'success',
        data: {
          user: userWithoutPassword,
          token,
        },
      });
    } catch (error) {
      console.error('Signup error:', error);
      return res.status(500).json({
        status: 500,
        message: '서버 오류가 발생했습니다.',
      });
    }
  }
}

// 유틸리티 함수들
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password: string): PasswordValidationResult {
  const minLength = 8;
  const maxLength = 15;

  // 비밀번호 조건 체크
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isValidLength =
    password.length >= minLength && password.length <= maxLength;

  if (!isValidLength) {
    return {
      isValid: false,
      message: `비밀번호는 ${minLength}자에서 ${maxLength}자 사이여야 합니다.`,
    };
  }

  if (!hasUpperCase) {
    return {
      isValid: false,
      message: '비밀번호에 대문자가 포함되어야 합니다.',
    };
  }

  if (!hasLowerCase) {
    return {
      isValid: false,
      message: '비밀번호에 소문자가 포함되어야 합니다.',
    };
  }

  if (!hasNumbers) {
    return {
      isValid: false,
      message: '비밀번호에 숫자가 포함되어야 합니다.',
    };
  }

  if (!hasSpecialChar) {
    return {
      isValid: false,
      message: '비밀번호에 특수문자가 포함되어야 합니다.',
    };
  }

  return {
    isValid: true,
    message: 'Valid password',
  };
}

function isValidNickname(nickname: string): boolean {
  return nickname.length >= 2 && nickname.length <= 20;
}
