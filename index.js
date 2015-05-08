import React from 'react';
import App from './App';
import appStyles from './appStyles';

if (typeof window !== 'undefined') {
  React.render(<App />, document.getElementById('container'));
  appStyles.applyToDOM();

  if (module.hot) {
    module.hot.accept('./App', () => {
      require('./App');
      appStyles.applyToDOM();
    });
  }
}

