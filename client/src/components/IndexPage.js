import React, { Component } from 'react';
import HomeImage from '../images/home-image.jpg';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button from '@material-ui/core/Button';

const WELCOME_TEXT = 'A place where books are loved and stored'

export default class IndexPage extends(Component) {
  constructor(props) {
    super(props);
    this.state = {
      typeWriterText: ''
    }
  }

  componentDidMount() {
    this.addLetterToTypeWriter();
  }

  addLetterToTypeWriter = () => {
    console.log(this.state.typeWriterText);
    if (this.state.typeWriterText === WELCOME_TEXT) {
      return;
    }
    this.setState({typeWriterText: WELCOME_TEXT.substr(0, this.state.typeWriterText.length + 1)})
    setTimeout(this.addLetterToTypeWriter, 50);
  }

  render() {
    return (
      <div className = {css(styles.pageContainer)}>
        <div className={css(styles.typeWriterContainer)}>
          <span className={css(styles.typeWriter)}>{this.state.typeWriterText}</span>
        </div>
        <div>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    );
  }
}

const caretKeyFrames = {
  'from': {
    borderColor: 'transparent'
  },
  '50%': {
    borderColor: 'orange'
  },
  'to': {
    borderColor: 'transparent'
  }

}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: '1px',
    backgroundImage: `url(${HomeImage})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  typeWriterContainer: {
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px'

  },
  typeWriter: {
    color: 'white',
    overflow: 'hidden',
    borderRight: '.15em solid orange',
    margin: '0 auto',
    letterSpacing: '.15em',
    fontSize: '2em',
    animationName: caretKeyFrames,
    animationDuration: '.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'step-end',
  },
});

