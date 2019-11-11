import React, {
  useEffect,
} from 'react';

import PropTypes from 'prop-types';

import {
  connect,
} from 'react-redux';

import {
  authLoginAction,
} from '../redux/auth/auth-actions';

const HomePage = ({ login, config }) => {
  useEffect(() => {
    login();
  }, []);

  return (
    <div>
      HomePage
      <div>
        <span>
          ENV:&nbsp;
        </span>
        <span>
          {config.APIURI}
        </span>
      </div>
    </div>
  );
};

const mdtp = (dispatch) => ({
  login: () => dispatch(authLoginAction()),
});

HomePage.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, mdtp)(HomePage);
