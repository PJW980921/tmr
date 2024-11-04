import { SignUpForm } from '../../components/_common/Form/SignUpForm';
import Logo from '../../../../public/images/tmr-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <Link href={'/'}>
        <Image src={Logo} alt="TMR Logo Image" />
      </Link>

      <SignUpForm />
      <div className="flex flex-row justify-center items-center gap-4 text-[2rem]">
        <p>이미 회원이신가요?</p>
        <Link href={'/signin'} className="hover:font-bold">
          로그인하기
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
