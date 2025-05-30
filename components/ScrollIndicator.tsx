'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      if (scrollTop > 100 && showScrollHint) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [showScrollHint]);

  return (
    <>
      <div 
        className="scroll-indicator"
        style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}
      />
      
      {showScrollHint && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
          <div className="text-center cyber-card p-6">
            <div className="text-small font-orbitron font-medium mb-2 uppercase tracking-wider">
              Scroll down to explore our digital void
            </div>
            <div className="text-small opacity-70 font-rajdhani mb-4">
              Discover tools and spaces for those who exist between definitions
            </div>
            <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center mx-auto animate-bounce">
              <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-pulse"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 