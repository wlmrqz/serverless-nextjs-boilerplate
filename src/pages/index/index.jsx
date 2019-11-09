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

const HomePage = ({ authenticate }) => {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div>
      HomePage
    </div>
  );
};

const mdtp = (dispatch) => ({
  authenticate: () => dispatch(authAuthenticate()),
});

HomePage.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default connect(null, mdtp)(HomePage);
