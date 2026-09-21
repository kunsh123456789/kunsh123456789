import type { ButtonHTMLAttributes } from 'react'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
}

const VARIANT_CLASSES: Record<string, string> = {
  primary: 'bg-violet-600 hover:bg-violet-500 border-violet-800 text-white',
  secondary: 'bg-slate-700 hover:bg-slate-600 border-slate-900 text-white',
  danger: 'bg-rose-600 hover:bg-rose-500 border-rose-800 text-white',
  ghost: 'bg-transparent hover:bg-white/10 border-slate-600 text-slate-200',
}

export function PixelButton({ variant = 'primary', className = '', children, ...rest }: PixelButtonProps) {
  return (
    <button
      className={`font-pixel text-xs px-4 py-3 border-b-4 rounded-md transition-all
        active:translate-y-0.5 active:border-b-2
        disabled:opacity-40 disabled:cursor-not-allowed disabled:active:translate-y-0
        ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
