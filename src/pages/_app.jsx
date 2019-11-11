import React from 'react';
import App from 'next/app';

import {
  Provider,
} from 'react-redux';

import {
  CssBaseline,
} from '@material-ui/core';

import {
  ThemeProvider,
} from '@material-ui/styles';

import withRedux from '../hocs/with-redux';
import defaultTheme from '../themes/default';
import config from '../settings/config';

class CustomApp extends App {
  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      router,
    } = this.props;

    const env = config.parse(router);

    return (
      <Provider store={reduxStore}>
        <CssBaseline />
        <ThemeProvider theme={defaultTheme}>
          <Component
            config={env}
            pageProps={pageProps}
            router={router}
          />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(CustomApp);
