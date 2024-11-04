'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavItem {
  id: number;
  item: string;
  path: string;
}

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu = ({ onClose }: DropDownMenuProps) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // 테스트 변수 설정
  const token = localStorage.getItem('token');

  const navItemList = {
    notUser: [
      { id: 0, item: '로그인', path: '/signin' },
      { id: 1, item: '회원가입', path: '/signup' },
    ],
    user: [
      { id: 0, item: '내 정보', path: '/mypage' },
      { id: 1, item: '글 등록하기', path: '/register' },
      { id: 2, item: '로그아웃', path: '/' },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleItemClick = (item: NavItem) => {
    if (item.item === '로그아웃') {
      localStorage.removeItem('token');
      router.push('/');
    }
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="absolute hidden sm:block right-3 mt-4 w-56 rounded-lg shadow-lg py-2 bg-white border-black-2 border-solid border-[0.1rem]  ring-black ring-opacity-5 z-50 "
    >
      {(token ? navItemList.user : navItemList.notUser).map((item, id, arr) => (
        <React.Fragment key={item.id}>
          <Link
            href={item.path}
            onClick={() => handleItemClick(item)}
            className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 hover:font-bold"
          >
            {item.item}
          </Link>
          {/* 마지막 항목이 아닐 경우에만 구분선 추가 */}
          {id !== arr.length - 1 && (
            <div className="mx-4 border-t border-gray-200 " />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropDownMenu;
