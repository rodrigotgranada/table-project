import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button 
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
