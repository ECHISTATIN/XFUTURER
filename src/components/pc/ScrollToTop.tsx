// components/ScrollToTop.tsx
'use client';

import React from 'react';

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top" onClick={handleClick}>
      <img src="/images/group575.png" alt="Scroll to Top" />
    </div>
  );
};

export default ScrollToTop;

