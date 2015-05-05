import React from 'react';
import StyleSheet from 'react-style';
import App from './App';

if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  function attachCompiledCSS() {
    style.innerHTML = StyleSheet.compile().css;
    document.head.appendChild(style);
  }

  React.render(<App />, document.getElementById('container'));
  attachCompiledCSS();

  // We are using React Hot Loader "manual" mode so we handle update ourselves:
  if (module.hot) {
    module.hot.accept('./App', () => {
      const FreshApp = require('./App');
      React.render(<FreshApp />, document.getElementById('container'));
      attachCompiledCSS();
    });
  }
}

