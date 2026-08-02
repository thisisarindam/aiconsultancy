import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-indigo-500" stopColor="currentColor" />
        <stop offset="100%" className="text-cyan-400" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path fill="url(#logo-gradient)" d="M 30 30 L 70 30 L 90 0 L 50 0 Z M 70 30 L 70 70 L 100 90 L 100 50 Z M 70 70 L 30 70 L 10 100 L 50 100 Z M 30 70 L 30 30 L 0 10 L 0 50 Z" />
  </svg>
);
