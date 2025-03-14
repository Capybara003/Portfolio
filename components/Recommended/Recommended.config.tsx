import React, { ReactNode } from 'react';
import Resume from '../Portfolio/Resume/Resume';
import { useRouter } from 'next/router';
import Terminal from '../Apps/Terminal/Terminal';

/**
 * Custom hook that returns prepared recommended apps config
 *@function useRecommendedConfig
 *@returns {IRecommendedFile[]} recommendedFiles - objects to be mapped into list of recommended files and apps
 */
export const useRecommendedConfig = (): {
  recommendedFiles: IRecommendedFile[];
} => {
  const router = useRouter();
  const recommendedFiles: IRecommendedFile[] = [
    {
      id: 1,
      fileName: 'CurrentResume',
      details: 'Sunday at 10:14 AM',
      icon: '/assets/icons/recommended/word.png',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <Resume />,
    },
    {
      id: 2,
      fileName: 'Terminal',
      details: 'Recently added',
      icon: '/assets/icons/recommended/terminal.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: <Terminal />,
    },
  ];

  return {
    recommendedFiles,
  };
};

interface IRecommendedFile {
  id: number;
  fileName: string;
  details: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: null | ReactNode;
}
