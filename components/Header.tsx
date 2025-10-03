
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-dark-card border-b border-dark-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-5v4h3l-4 5z" />
            </svg>
            <h1 className="text-2xl font-bold text-light-text tracking-tight">Gemini Image Studio</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
