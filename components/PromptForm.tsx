
import React, { useState } from 'react';
import { ASPECT_RATIO_OPTIONS } from '../constants';
import { AspectRatio } from '../types';

interface PromptFormProps {
  onSubmit: (prompt: string, aspectRatio: AspectRatio) => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState<string>('A photorealistic image of a majestic lion in the savannah at sunset, with a dramatic sky.');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.LANDSCAPE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt, aspectRatio);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-6 rounded-lg border border-dark-border">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-medium-text mb-2">
          Your Prompt
        </label>
        <textarea
          id="prompt"
          name="prompt"
          rows={5}
          className="block w-full bg-dark-bg border border-dark-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm text-light-text p-3 transition-colors"
          placeholder="e.g., A futuristic city skyline at night with flying cars"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="aspect-ratio" className="block text-sm font-medium text-medium-text mb-2">
          Aspect Ratio
        </label>
        <select
          id="aspect-ratio"
          name="aspect-ratio"
          className="block w-full bg-dark-bg border border-dark-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm text-light-text p-3 transition-colors"
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
        >
          {ASPECT_RATIO_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-secondary disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Image'
          )}
        </button>
      </div>
    </form>
  );
};

export default PromptForm;
