import ReactGA from 'react-ga';
ReactGA.initialize('UA-111480921-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
