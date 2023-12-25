const GH_PAGES_REPO = '/reward_system_front-end/';

const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  environ: process.env.NODE_ENV,
  // TODO: Add more logic here if you want to support deployment environments
  // other than Github Pages.
  rootPath: process.env.NODE_ENV === 'production' ? GH_PAGES_REPO : '/',
};

export default config;
