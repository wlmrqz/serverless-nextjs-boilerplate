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

class CustomApp extends App {
  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      router,
    } = this.props;

    return (
      <Provider store={reduxStore}>
        <CssBaseline />
        <ThemeProvider theme={defaultTheme}>
          <Component
            pageProps={pageProps}
            router={router}
          />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(CustomApp);
