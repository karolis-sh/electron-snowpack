const MODE = process.env.NODE_ENV;

module.exports = () => {
  return {
    type: 'main',
    process_env: JSON.stringify(process.env),
    MODE,
  };
};
