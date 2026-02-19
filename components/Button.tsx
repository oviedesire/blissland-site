import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  [key: string]: any;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block';
  
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
