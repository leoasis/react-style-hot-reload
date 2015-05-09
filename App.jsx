import React from 'react';
import Button from './Button';

module.exports = class App extends React.Component {
  render() {
    return <div>
      <h1 styles={[styles.header]}>Hello, world!</h1>
      <p styles={[styles.paragraph]}>
        An awesome paragraph, look!
      </p>
      <Button type="primary" text="Hey I'm a button" />
      {' '}
      <Button text="Hey I'm another button" />
    </div>
  }
};

const StyleSheet = require('react-style');

const styles = StyleSheet.create({
  header: {
    color: 'red'
  },
  paragraph: {
    background: 'green',
    color: 'white',
    padding: 4
  }
});
