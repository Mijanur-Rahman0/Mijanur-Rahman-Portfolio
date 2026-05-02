import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'hover:bg-white/10 text-white rounded-full transition-all'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={cn(variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn('glass-card p-6', className)}>
      {children}
    </div>
  );
};

export const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
    </div>
  );
};
