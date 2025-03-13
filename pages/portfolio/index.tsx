import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import PortfolioLanding from '../../components/Portfolio/PortfolioLanding/PortfolioLanding';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Joshua Dvid| Full-Stack Web Developer'}>
      <PortfolioLanding />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
