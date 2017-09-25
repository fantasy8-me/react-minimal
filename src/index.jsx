/* eslint global-require: 0 */
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';

import SeatPlan from './components/SeatPlan';

const render = (RootComponet) => {
  ReactDOM.render(
    <AppContainer>
      <RootComponet filed1="hello world 2" />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(SeatPlan);
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/SeatPlan', () => {
    // const NextApp = require('./components/SeatPlan').default;
    render(SeatPlan);
  });
}
