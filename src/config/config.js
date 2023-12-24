const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  // debugMode: process.env.REACT_APP_DEBUG === 'true',
  // TODO: Add more logic here if you want to support deployment environments
  // other than Github Pages.
  rootPath: process.env.NODE_ENV === 'production' ? '/reward_system_front-end': '/',
};

export default config;
