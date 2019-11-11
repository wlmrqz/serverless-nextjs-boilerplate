const logger = () => {
  let env = null;

  return {
    debug: () => {
      env = true;
      return env;
    },
  };
};

export default logger;
