'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../../public/images/favicon.svg';
import { Clock, Menu } from 'lucide-react';
import { useCurrentTime } from '@/app/hooks/useCurrentTime';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';

const Headers = () => {
  const { currentTime, formatDate, formatTime } = useCurrentTime();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="TMR Logo" />
            <span className="text-[3rem] font-bold text-gray-800">TMR</span>
          </Link>
          <div className="flex flex-col text-gray-600">
            <span className="text-[1.2rem] sm:text-sm">
              {formatDate(currentTime)}
            </span>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-gray-500" />
              <span className="text-[1.2rem] sm:text-sm">
                {formatTime(currentTime)}
              </span>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          {/* 모바일에서는 메뉴 아이콘, sm 브레이크포인트 이상에서는 로그인/회원가입 버튼 */}
          <div className="hidden sm:block">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
            {isMenuOpen && <DropDownMenu onClose={() => !setIsMenuOpen} />}
          </div>
          <div className="sm:hidden flex items-center gap-4">
            <Link
              href={'/signin'}
              className="flex items-center justify-center text-[2.6rem] font-normal w-[11.3rem] h-[5.7rem] flex-shrink-0 rounded-[0.8rem] bg-black-2 text-white-F"
            >
              로그인
            </Link>
            <Link
              href={'/signup'}
              className="flex items-center justify-center text-[2.6rem] font-normal w-[11.3rem] h-[5.7rem] flex-shrink-0 rounded-[0.8rem] text-black-2 border-solid border-[0.1rem]"
            >
              회원가입
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
