import React from 'react';

module.exports = class App extends React.Component {
  render() {
    return <div>
      <h1 styles={[styles.header]}>Hello, world!</h1>
    </div>
  }
}

const StyleSheet = require('react-style');

const styles = StyleSheet.create({
  header: {
    color: 'red'
  }
});

// How do I update the style tag in the header with the new styles when this component changes?
