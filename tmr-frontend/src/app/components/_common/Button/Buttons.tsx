import { ButtonSize, ButtonType, ButtonVariant } from './button';
import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = memo(
  ({
    size,
    variant = 'primary',
    type = 'button',
    isLoading = false,
    children,
    className,
    disabled,
    ...props
  }: ButtonProps) => {
    const getButtonStyles = () => {
      // 기본 스타일
      let styles =
        'flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors';

      // 크기별 스타일 (반응형 포함)
      switch (size) {
        case 'myPage':
          styles +=
            ' w-[6.4rem] h-[2.8rem] rounded-[0.3rem] sm:w-[7.4rem] sm:h-[3rem] sm:rounded-[0.35rem] md:w-[8.4rem] md:h-[3.2rem] md:rounded-[0.4rem]';
          break;
        case 'writing':
          styles +=
            ' w-[7.9rem] h-[4.4rem] rounded-[0.6rem] sm:w-[8.9rem] sm:h-[4.9rem] sm:rounded-[0.7rem] md:w-[9.9rem] md:h-[5.4rem] md:rounded-[0.8rem]';
          break;
        case 'detail':
          styles +=
            ' w-[5.4rem] h-[2.6rem] rounded-[0.6rem] sm:w-[6.4rem] sm:h-[2.85rem] sm:rounded-[0.7rem] md:w-[7.4rem] md:h-[3.1rem] md:rounded-[0.8rem]';
          break;
        case 'recommend':
          styles +=
            ' w-[28.1rem] h-[7.3rem] rounded-[0.6rem] sm:w-[30.1rem] sm:h-[8rem] sm:rounded-[0.7rem] md:w-[32.1rem] md:h-[8.8rem] md:rounded-[0.8rem]';
          break;
        case 'sign':
          styles += ' w-full h-[6rem] rounded-[0.8rem]';
          break;
      }

      // 변형별 스타일
      switch (variant) {
        case 'primary':
          styles +=
            ' bg-[#2B2B2B] text-[#FFFFFF] text-[2.2rem] sm:text-[1.4rem] md:text-[1.6rem]';
          break;
        case 'cancel':
          styles +=
            ' bg-white border border-[#2B2B2B] text-[#2B2B2B] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]';
          break;
        case 'delete':
          styles +=
            ' bg-white border border-[#F12F2F] text-[#F12F2F] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]';
          break;
      }

      return styles;
    };

    return (
      <button
        type={type}
        className={`${getButtonStyles()} ${className || ''}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
              로딩중...
            </span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
