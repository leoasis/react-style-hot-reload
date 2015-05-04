import React from 'react';
import App from './App';
import StyleSheet from 'react-style';

if (typeof window !== 'undefined') {
  React.render(<App />, document.getElementById('container'));

  const style = document.createElement('style');
  style.innerHTML = StyleSheet.compile().css;
  document.head.appendChild(style);
}

