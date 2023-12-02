import React, { useEffect } from 'react';
import Theme from '../styles/theme';

const analyticsCode = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LJHLJ0QQVR');
`;

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Add Google Analytics script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LJHLJ0QQVR';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      const analyticsScript = document.createElement('script');
      analyticsScript.innerHTML = analyticsCode;
      document.head.appendChild(analyticsScript);
    };

    // Clean up the dynamically added script on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default App;
