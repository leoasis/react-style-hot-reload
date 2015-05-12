import React from 'react';
import App from './App';

if (typeof window !== 'undefined') {
  React.render(<App />, document.getElementById('container'));
}

