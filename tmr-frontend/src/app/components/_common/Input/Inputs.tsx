import React, { forwardRef } from 'react';
import { InputProps } from './input';

export const Inputs = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        <label className="block text-black-2 text-[2rem] font-light">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          autoComplete="current-password"
          className={`
            w-full h-[6rem] 
            rounded-[0.8rem] 
            border border-gray-300
            px-4 py-2 text-[2rem]
            focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className || ''}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Inputs.displayName = 'Inputs';
