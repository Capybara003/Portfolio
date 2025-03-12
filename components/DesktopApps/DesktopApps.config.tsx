import React from 'react';
import { IDesktopApp } from '../../types/ui/desktop-app';
import VsCode from '../Apps/VsCode/VsCode';
import Likes from '../Likes/Likes';
import { useRouter } from 'next/router';
import Resume from '../Portfolio/Resume/Resume';
import TrashBin from '../Folders/TrashBin/TrashBin';
import CommentsForm from '../CommentsForm/CommentsForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Acknowledgments from '../Acknowledgments/Acknowledgments';
import CommentsList from '../CommentsList/CommentsList';
import Iframe from '../Iframe/Iframe';

/**
 * Custom hook used to get initial configuration for desktop
 * @function useDesktopApps
 * @returns {object} - object with array of icon variants with already specified type of sorting
 * */
export const useDesktopApps = (): {
  sortedAlphabetically: IDesktopApp[];
  sortedByDate: IDesktopApp[];
  sortedBySize: IDesktopApp[];
  appsInTrashBin: IDesktopApp[];
} => {
  const router = useRouter();
  const { removedApps, compressedApps } = useTypedSelector((state) => state.ui);

  const initialDesktopAppsList: IDesktopApp[] = [
    {
      id: 2,
      text: 'VSCode',
      willOpenWindowWith: <VsCode />,
      variant: 'desktop',
      iconSrc: '/assets/icons/startmenu/vscode.svg',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 3,
      text: 'Joshua ✨',
      willOpenWindowWith:
        <Iframe
          iframeSrc={'https://Joshua-David-portfolio.vercel.app'}
          iframeSize={{ width: '100%', height: '100%' }}
          title={'Portfoilo'}
          style={{
            border: 'none',
          }}
        />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/user-folder.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 4,
      text: 'Likes',
      willOpenWindowWith: <Likes />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/like.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 6,
      text: 'Resume',
      willOpenWindowWith: <Resume />,
      variant: 'desktop',
      iconSrc: '/assets/icons/recommended/word.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 7,
      text: 'Projects',
      willOpenWindowWith: null,
      variant: 'desktop',
      iconSrc: '/assets/icons/recommended/power-point.png',
      iconSize: { width: 40, height: 40 },
      action: () => router.push('https://Joshua-David-portfolio.vercel.app/#work'),
    },
    {
      id: 8,
      text: 'Trash',
      willOpenWindowWith: <TrashBin />,
      variant: 'desktop',
      iconSrc:
        removedApps.length > 0
          ? '/assets/icons/Desktop/recycle-bin-full.png'
          : '/assets/icons/Desktop/recycle-bin-empty.png',
      iconSize: { width: 42, height: 42 },
      action: null,
    },
    {
      id: 9,
      text: 'Comment',
      willOpenWindowWith: <CommentsForm />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/comment.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 10,
      text: 'Acknowledgments',
      willOpenWindowWith: <Acknowledgments />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/acknowledgment.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
    {
      id: 11,
      text: 'Comments',
      willOpenWindowWith: <CommentsList />,
      variant: 'desktop',
      iconSrc: '/assets/icons/Desktop/comments.png',
      iconSize: { width: 40, height: 40 },
      action: null,
    },
  ];
  // Here we dynamically create copies of compressed apps. By clicking compress, user adds app to global list of compressed in redux
  // Then we filter out apps that should be compressed by their name (filter), and next we map over them and change their text, icon and other params
  const compressedAppsList = [...initialDesktopAppsList]
    .filter((app) => compressedApps.includes(app.text))
    .map((compressedApp) => ({
      ...compressedApp,
      text: compressedApp.text + '.zip',
      iconSrc: '/assets/icons/Desktop/zip.png',
      willOpenWindowWith: null,
      action: null,
      id: compressedApp.id + 777,
    }));

  // Here is apps that are currently on desktop (consist of apps and their compressed copies)
  // User can delete an app from desktop and we will filter it out by name. Names of removed apps are stored in global store (removedApps here)
  const desktopAppsList = [
    ...initialDesktopAppsList,
    ...compressedAppsList,
  ].filter((app) => !removedApps.includes(app.text));

  const appsInTrashBin = [...initialDesktopAppsList].filter((app) =>
    removedApps.includes(app.text)
  );

  const sortedAlphabetically = [...desktopAppsList].sort((a, b) =>
    a.text.toLowerCase().localeCompare(b.text.toLowerCase())
  );
  const sortedBySize = [...desktopAppsList];
  const sortedByDate = [...desktopAppsList].sort((a, b) => b.id - a.id);

  return {
    sortedAlphabetically,
    sortedByDate,
    sortedBySize,
    appsInTrashBin,
  };
};
