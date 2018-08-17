import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

import './DictaphoneComponent.scss';

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <Fragment>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
        <div className='dictaphone-result'>{transcript}</div>
      </Fragment>
    );
  }

  static getOptions() {
    return {
      autoStart: false
    };
  }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone.getOptions())(Dictaphone);