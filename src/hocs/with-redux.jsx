import React from 'react';
import PropTypes from 'prop-types';

import store from '../redux/store';

// eslint-disable-next-line no-underscore-dangle
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore() {
  if (typeof window === 'undefined') {
    return store;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (!window[__NEXT_REDUX_STORE__]) {
    // eslint-disable-next-line no-underscore-dangle
    window[__NEXT_REDUX_STORE__] = store;
  }

  // eslint-disable-next-line no-underscore-dangle
  return window[__NEXT_REDUX_STORE__];
}

const withRedux = (Application) => {
  class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();

      // eslint-disable-next-line no-param-reassign
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};

      if (typeof Application.getInitialProps === 'function') {
        appProps = await Application.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const {
        Component,
        err,
        initialReduxState,
        pageProps,
        router,
      } = this.props;

      return (
        <Application
          Component={Component}
          err={err}
          initialReduxState={initialReduxState}
          router={router}
          pageProps={pageProps}
          reduxStore={this.reduxStore}
        />
      );
    }
  }

  AppWithRedux.propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(Object),
    ]).isRequired,
    err: PropTypes.instanceOf(Object),
    initialReduxState: PropTypes.instanceOf(Object),
    pageProps: PropTypes.instanceOf(Object),
    router: PropTypes.instanceOf(Object).isRequired,
  };

  AppWithRedux.defaultProps = {
    err: undefined,
    initialReduxState: {},
    pageProps: {},
  };

  return AppWithRedux;
};

export default withRedux;
