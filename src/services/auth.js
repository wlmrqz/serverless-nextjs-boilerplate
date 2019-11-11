import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';

const auth = () => {
  let pool = null;
  let user = null;

  return {
    login: () => {
      pool = true;
      user = true;
      return (pool && user);
    },
  };
};


export default auth;
