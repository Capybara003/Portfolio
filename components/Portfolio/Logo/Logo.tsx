import React from 'react';
import * as Styled from './Logo.styles';
import Link from 'next/link';

export interface Props {
  isExpanded: boolean;
}

/**
 *Renders my animated logo
 *@function Logo
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Logo component
 */
const Logo = ({ isExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container isExpanded={isExpanded}>
      <span className={'letter'}>J </span>
      <span className={'letter'}>o </span>
      <span className={'main-letter'}>s </span>
      <span className={'letter'}>h </span>
      <span className={'letter'}>u </span>
      <span className={'letter'}>a </span>
      <Link href={'/portfolio'} passHref>
        <Styled.A />
      </Link>
    </Styled.Container>
  );
};

export default Logo;
