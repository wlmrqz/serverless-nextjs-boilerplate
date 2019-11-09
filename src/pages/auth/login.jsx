import React, {
  useEffect,
} from 'react';

import PropTypes from 'prop-types';

import {
  connect,
} from 'react-redux';

import {
  authAuthenticate,
} from '../../redux/auth/auth-actions';

const AuthLoginPage = ({ authenticate }) => {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div>
      AuthLoginPage
    </div>
  );
};

const mdtp = (dispatch) => ({
  authenticate: () => dispatch(authAuthenticate()),
});

AuthLoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default connect(null, mdtp)(AuthLoginPage);
