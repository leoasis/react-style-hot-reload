import React from 'react';
import StyleSheet from 'react-style';
import App from './App';

if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  document.head.appendChild(style);

  function attachCompiledCSS() {
    style.innerHTML = StyleSheet.compile().css;
  }

  function removeRegisteredCSS() {
    StyleSheet.reset();
  }

  React.render(<App />, document.getElementById('container'));
  attachCompiledCSS();

  // We are using React Hot Loader "manual" mode so we handle update ourselves:
  if (module.hot) {
    module.hot.accept('./App', () => {
      removeRegisteredCSS();
      require('./App');
      attachCompiledCSS();
    });
  }
}

