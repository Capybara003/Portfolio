import type { NextPage } from 'next';
import React from 'react';
import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import About from '../../../components/Portfolio/About/About';

const PortfolioAboutPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Jashon David | Full stack and web3 developer'}>
      <About />
    </PortfolioLayout>
  );
};

export default PortfolioAboutPage;
