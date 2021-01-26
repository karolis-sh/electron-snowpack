const MODE = process.env.NODE_ENV;

module.exports = () => {
  return {
    process_env: JSON.stringify(process.env),
    MODE,
  };
};
