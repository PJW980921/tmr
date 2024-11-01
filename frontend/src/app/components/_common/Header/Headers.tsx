'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../../public/images/favicon.svg';
import { Clock } from 'lucide-react';
import { useCurrentTime } from '@/app/hooks/useCurrentTime';
interface HeaderProps {
  isLoggedIn: boolean;
}

const Headers = ({ isLoggedIn }: HeaderProps) => {
  const { currentTime, formatDate, formatTime } = useCurrentTime();
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center ">
            <Image src={Logo} alt="TMR Logo" />
            <span className="text-[3rem] font-bold text-gray-800">TMR</span>
          </Link>
          <div className="flex flex-col text-gray-600">
            <span className="text-sm">{formatDate(currentTime)}</span>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-gray-500" />
              <span className="text-sm">{formatTime(currentTime)}</span>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">환영합니다</span>
              </div>
            </>
          ) : (
            <>
              <Link
                href={'/signin'}
                className="flex items-center justify-center text-[2.6rem] font-normal  w-[11.3rem] h-[5.7rem] flex-shrink-0 rounded-[0.8rem] bg-black-2 text-white-F "
              >
                로그인
              </Link>
              <Link
                href={'/signup'}
                className="flex items-center justify-center text-[2.6rem] font-normal  w-[11.3rem] h-[5.7rem] flex-shrink-0 rounded-[0.8rem]  text-black-2 border-solid border-[0.1rem] "
              >
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Headers;
