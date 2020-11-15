import React, { FC } from 'react';
import { AppProps } from 'next/app';

import '../styles/global.scss';

// eslint-disable-next-line react/prop-types
const App: FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
