const config = (() => {
  const isServer = process.env.ISSERVER;

  return {
    parse: (router) => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line
        console.log('ROUTER:', router);
      }

      let env = { ...router.query };

      if (!isServer) {
        env = {
          NODE_ENV: process.env.NODE_ENV,
          APIURI: process.env.APIURI,
          AWSREGION: process.env.AWSREGION,
          AWSPOOLID: process.env.AWSPOOLID,
          AWSCLIENTID: process.env.AWSCLIENTID,
        };
      }

      return env;
    },
  };
})();

export default config;
