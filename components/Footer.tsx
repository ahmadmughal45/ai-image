
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-card border-t border-dark-border mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-dark-text">
          Powered by Google Gemini. © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
