import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SplitTextProps {
  text: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', style, delay = 0 }) => {
  const container = useRef<HTMLHeadingElement>(null);
  
  useGSAP(() => {
    if (!container.current) return;
    
    // Simple naive splitting for demonstration
    // Since we need to animate words/lines, we can use a simpler approach or rely on GSAP SplitText (which is a paid plugin normally)
    // For this context, assuming we build a custom naive split or just animate the children if GSAP SplitText is not available globally.
    // Let's manually split words if it's a string, or just animate the container.
    // The prompt says "using a reusable SplitText component", let's create a custom split logic for words.
    
    const chars = container.current.querySelectorAll('.split-word');
    
    gsap.from(chars, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: delay
    });
  }, { scope: container });

  const renderContent = () => {
    if (typeof text === 'string') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] leading-tight">
          <span className="split-word inline-block">{word}</span>
        </span>
      ));
    }
    
    // If it's a react node like standard elements with `<br/>`, we can try to wrap it manually
    // But since the prompt specifies "Grow Your Team <br /> Thriving", we handle it by creating a custom render or passing it as dangerouslySetInnerHTML and targeting words.
    // For simplicity, we just animate the container or specific children.
    return <div className="split-word inline-block">{text}</div>;
  };

  return (
    <div ref={container} className={`${className}`} style={style}>
      {renderContent()}
    </div>
  );
};
