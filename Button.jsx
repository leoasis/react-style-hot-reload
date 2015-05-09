import React from 'react';

module.exports = class Button extends React.Component {
  render() {
    const buttonStyles = [styles.button];
    switch (this.props.type) {
      case 'primary':
        buttonStyles.push(styles.buttonPrimary);
        break;
      default:
        buttonStyles.push(styles.buttonDefault);
    }
    return <button styles={buttonStyles} onClick={this.props.onClick}>
      {this.props.text}
    </button>
  }
};

const StyleSheet = require('react-style');

const styles = StyleSheet.create({
  button: {
    border: 0,
    borderRadius: 5,
    padding: '5 12'
  },
  buttonPrimary: {
    backgroundColor: 'orange',
    color: 'white'
  },
  buttonDefault: {
    backgroundColor: 'blue',
    color: 'white'
  }
});
