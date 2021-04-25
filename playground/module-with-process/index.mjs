const MODE = process.env.NODE_ENV;

export default () => {
  return {
    type: 'module',
    process_env: JSON.stringify(process.env),
    MODE,
  };
};
