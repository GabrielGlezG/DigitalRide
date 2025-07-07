import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'light', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const iconSize = {
    sm: 20,
    md: 24,
    lg: 40
  };

  return (
    <div className="flex items-center space-x-3">
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-indigo-400 via-blue-500 to-slate-600 rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group`}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-blue-500 to-slate-600 animate-pulse opacity-80"></div>

        {/* Digital circuit pattern background */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            {/* Digital path/route pattern */}
            <path
              d="M5 20 L15 20 L20 15 L25 20 L35 20 M20 5 L20 15 M20 25 L20 35"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Connection nodes */}
            <circle cx="15" cy="20" r="1.5" fill="white" />
            <circle cx="25" cy="20" r="1.5" fill="white" />
            <circle cx="20" cy="15" r="1.5" fill="white" />
          </svg>
        </div>

        {/* Main bike icon with digital elements */}
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
        >
          {/* Bike wheels */}
          <circle cx="6" cy="18" r="3" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="18" cy="18" r="3" stroke="white" strokeWidth="2" fill="none" />

          {/* Bike frame */}
          <path
            d="M9 18 L15 18 M12 18 L12 12 L8 12 M12 12 L16 12 L14 8 L10 8"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Digital elements - small dots representing data flow */}
          <circle cx="4" cy="8" r="1" fill="white" opacity="0.8" />
          <circle cx="20" cy="8" r="1" fill="white" opacity="0.8" />
          <circle cx="12" cy="4" r="1" fill="white" opacity="0.8" />

          {/* Connection lines for digital aspect */}
          <path
            d="M4 8 L12 4 L20 8"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`${textSizeClasses[size]} font-black ${
              variant === 'light' ? 'text-gray-900' : 'text-white'
            } leading-none`}
          >
            DIGITAL
          </span>
          <span
            className={`${textSizeClasses[size]} font-black bg-gradient-to-r from-indigo-400 via-blue-500 to-slate-600 bg-clip-text text-transparent leading-none`}
          >
            RIDE
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
