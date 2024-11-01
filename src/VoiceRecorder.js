// src/VoiceRecorder.js

import React, { useState, useRef } from 'react';

const VoiceRecorder = ({ setTranscript, sourceLang }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const finalTranscriptRef = useRef(''); // Holds the accumulated final transcript

  const getLanguageCode = (language) => {
    const languageMap = {
      English: 'en-US',
      Spanish: 'es-ES',
      French: 'fr-FR',
      German: 'de-DE',
      Chinese: 'zh-CN',
      Japanese: 'ja-JP',
      // Add more languages as needed
    };
    return languageMap[language] || 'en-US';
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = getLanguageCode(sourceLang);
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscriptRef.current += transcriptSegment + ' ';
        } else {
          interimTranscript += transcriptSegment;
        }
      }
      setTranscript(finalTranscriptRef.current + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error detected: ' + event.error);
      alert('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
    setListening(true);

    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      finalTranscriptRef.current = ''; // Reset the final transcript when stopping
    }
  };

  return (
    <div className="voice-recorder">
      <button onClick={listening ? stopListening : startListening} className="record-button">
        {listening ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default VoiceRecorder;
