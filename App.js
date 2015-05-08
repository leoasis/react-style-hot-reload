import React from 'react';

module.exports = class App extends React.Component {
  render() {
    return <div>
      <h1 styles={[styles.header]}>Hello, world!</h1>
      <p styles={[styles.paragraph]}>
        An awesome paragraph, look!
      </p>
    </div>
  }
}

const StyleSheet = require('react-style');

const styles = StyleSheet.create({
  header: {
    color: 'red'
  },
  paragraph: {
    background: 'green',
    color: 'white'
  }
});
