import React from 'react';
import Iframe from '../../Iframe/Iframe';

/**
 *Returns embedded VS Code iframe
 *@function Component
 *@returns {JSX.Element} - Rendered VsCode component
 */
const VsCode = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={'https://github1s.com/V0410/Windows_portfolio'}
      iframeSize={{ width: '100%', height: '100%' }}
      title={'VS Code'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default VsCode;
