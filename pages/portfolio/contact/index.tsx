import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Contact from '../../../components/Portfolio/Contact/Contact';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Jashon David | Full stack and web3 developer'}>
      <Contact />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
