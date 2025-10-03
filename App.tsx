
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import { generateImage } from './services/geminiService';
import type { AspectRatio } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState<string>('');

  const handleGenerate = useCallback(async (prompt: string, aspectRatio: AspectRatio) => {
    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    setLastPrompt(prompt);

    try {
      const generatedImageUrl = await generateImage(prompt, aspectRatio);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg font-sans">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-light-text mb-4">Create Your Vision</h2>
            <p className="text-medium-text mb-6">
              Describe anything you can imagine. Be as specific or abstract as you like. The AI will bring your words to life.
            </p>
            <PromptForm onSubmit={handleGenerate} isLoading={isLoading} />
          </div>
          <div className="w-full">
            <ImageDisplay 
              isLoading={isLoading} 
              imageUrl={imageUrl} 
              error={error} 
              prompt={lastPrompt} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
