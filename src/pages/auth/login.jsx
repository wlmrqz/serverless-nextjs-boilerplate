import React, {
  useEffect,
} from 'react';

import PropTypes from 'prop-types';

import {
  connect,
} from 'react-redux';

import {
  authLoginAction,
} from '../../redux/auth/auth-actions';

const AuthLoginPage = ({ login }) => {
  useEffect(() => {
    login();
  }, []);

  return (
    <div>
      AuthLoginPage
    </div>
  );
};

const mdtp = (dispatch) => ({
  login: () => dispatch(authLoginAction()),
});

AuthLoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mdtp)(AuthLoginPage);
