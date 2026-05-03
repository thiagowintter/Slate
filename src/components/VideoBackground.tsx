import React from 'react';

interface VideoBackgroundProps {
  src: string;
  flip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, flip, className = '', style }) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${className}`}
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        ...style
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
