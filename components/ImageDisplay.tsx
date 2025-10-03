
import React from 'react';
import Spinner from './Spinner';

interface ImageDisplayProps {
  isLoading: boolean;
  imageUrl: string | null;
  error: string | null;
  prompt: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ isLoading, imageUrl, error, prompt }) => {
  const getAspectRatioClass = (url: string | null): string => {
    if (!url) return 'aspect-square';
    const img = new Image();
    img.src = url;
    if (img.width / img.height > 1.3) return 'aspect-video'; // Landscape-ish
    if (img.height / img.width > 1.3) return 'aspect-[3/4]'; // Portrait-ish
    return 'aspect-square';
  }

  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <div className="text-center p-8 bg-red-900/20 border border-red-500 rounded-lg">
          <h3 className="text-xl font-bold text-red-400 mb-2">Generation Failed</h3>
          <p className="text-red-300">{error}</p>
        </div>
      );
    }

    if (imageUrl) {
      return (
        <div className="animate-fade-in">
            <a href={imageUrl} download={`gemini-art-${prompt.substring(0, 20)}.png`} title="Download Image">
              <img
                src={imageUrl}
                alt={prompt}
                className="w-full h-auto rounded-lg shadow-2xl object-contain border-2 border-dark-border transition-transform duration-300 hover:scale-105"
              />
            </a>
            <p className="text-sm text-dark-text mt-4 italic">"{prompt}"</p>
        </div>
      );
    }

    return (
      <div className="text-center p-8 border-2 border-dashed border-dark-border rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-medium-text">Your generated image will appear here</h3>
        <p className="mt-1 text-sm text-dark-text">Enter a prompt and click "Generate Image" to start.</p>
      </div>
    );
  };

  return (
    <div className={`relative w-full bg-dark-card p-4 rounded-lg border border-dark-border flex items-center justify-center transition-all duration-300 min-h-[300px] lg:min-h-[500px]`}>
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
