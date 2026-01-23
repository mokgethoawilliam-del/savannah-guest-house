
import React from 'react';

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  label, 
  className = "", 
  aspectRatio = "aspect-video" 
}) => {
  return (
    <div className={`bg-stone-200 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center p-6 text-stone-400 rounded-lg overflow-hidden ${aspectRatio} ${className}`}>
      <svg className="w-12 h-12 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-xs font-medium uppercase tracking-widest">{label}</span>
    </div>
  );
};

export default PlaceholderImage;
