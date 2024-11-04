'use client';
import { useForm } from 'react-hook-form';
import { Form } from '../Form/Form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Inputs } from '../Input/Inputs';
import Button from '../Button/Buttons';
import { SignUpFormData } from '@/app/api/auth/type';
import { useRouter } from 'next/navigation';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: (data: SignUpFormData) =>
      axios.post('http://localhost:3099/signup', data),
    onSuccess: () => {
      // 성공 처리 로직
      alert('회원가입 성공');
      router.push('/signin');
    },
    onError: () => {
      alert(errors);
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    signUpMutation.mutate(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={signUpMutation.isPending}
    >
      <Form.Field>
        <Inputs
          type="email"
          label="이메일"
          {...register('email', { required: '이메일은 필수입니다.' })}
          error={errors.email?.message}
        />
      </Form.Field>
      <Form.Field>
        <Inputs
          type="text"
          label="닉네임"
          {...register('nickname', { required: '닉네임은 필수입니다.' })}
          error={errors.nickname?.message}
        />
      </Form.Field>
      <Form.Field>
        <Inputs
          type="password"
          label="비밀번호"
          {...register('password', { required: '비밀번호는 필수입니다.' })}
          error={errors.password?.message}
        />
      </Form.Field>

      <Form.Submit>
        <Button
          type="submit"
          size="sign"
          variant="primary"
          isLoading={signUpMutation.isPending}
        >
          회원가입
        </Button>
      </Form.Submit>
    </Form>
  );
};
