import React, { ReactNode } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {IMyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useContactConfig = (): { myContacts: IMyContact[] } => {
  const myContacts: IMyContact[] = [
    {
      id: 1,
      icon: <FiTwitter className={'contact-icon'} />,
      text: 'Twitter',
      href: 'https://twitter.com/Joshua_kcc',
    },
    {
      id: 2,
      icon: <FiGithub className={'contact-icon'} />,
      text: 'GitHub',
      href: 'https://github.com/V0410',
    },
    {
      id: 3,
      icon: <FiLinkedin className={'contact-icon'} />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Joshua/',
    },
    {
      id: 4,
      icon: <FiInstagram className={'contact-icon'} />,
      text: 'LinkedIn',
      href: 'https://www.instagram.com/Joshuacodes/',
    },
  ];

  return { myContacts };
};

export interface IMyContact {
  id: number;
  icon: ReactNode;
  text: string;
  href: string;
}
