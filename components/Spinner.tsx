
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
      <h3 className="text-xl font-semibold text-medium-text">Generating Your Image...</h3>
      <p className="text-sm text-dark-text max-w-xs">The AI is working its magic. This may take a moment, especially for complex prompts.</p>
    </div>
  );
};

export default Spinner;
