'use client';

import { useEffect } from 'react';

const useWSADNavigation = (onNavigate: (direction: string) => void) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {

        case 'w':
          onNavigate('up');
          break;

        case 's':
          onNavigate('down');
          break;

        case 'a':
          onNavigate('left');
          break;

        case 'd':
          onNavigate('right');
          break;

        case 'W':
          onNavigate('right');
          break;

        case 'S':
          onNavigate('left');
          break;

        case 'A':
          onNavigate('down');
          break;

        case 'D':
          onNavigate('up');
          break;

        case 'ArrowUp':
          onNavigate('up');
          break;

        case 'ArrowDown':
          onNavigate('down');
          break;

        case 'ArrowLeft':
          onNavigate('left');
          break;

        case 'ArrowRight':
          onNavigate('right');
          break;

        case 'Enter':
          onNavigate('enter');
          break;

        case 'Escape':
          onNavigate('escape');
          break;


        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onNavigate]);
};

export default useWSADNavigation;
