import React from 'react';

import {
  useRouter,
} from 'next/router';

import config from '../settings/config';

const withConfig = (WrappedComponent) => ({ ...props }) => {
  const router = useRouter();
  const env = config.parse(router);

  return (
    <WrappedComponent
      {...props}
      config={env}
    />
  );
};

export default withConfig;
