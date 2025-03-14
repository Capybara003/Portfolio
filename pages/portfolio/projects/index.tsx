import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import HighlightedProjects from '../../../components/Portfolio/HighlightedProjects/HighlightedProjects';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Jashon David | Full stack and web3 developer'}>
      <HighlightedProjects />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
