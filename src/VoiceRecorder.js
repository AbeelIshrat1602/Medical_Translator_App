// src/VoiceRecorder.js

import React, { useState, useRef } from 'react';

const VoiceRecorder = ({ setTranscript, sourceLang, onStartRecording }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const getLanguageCode = (language) => {
    const languageMap = {
      English: 'en-US',
      Spanish: 'es-ES',
      French: 'fr-FR',
      German: 'de-DE',
      Chinese: 'zh-CN',
      Japanese: 'ja-JP',
      Italian: 'it-IT',
      Korean: 'ko-KR',
      Portuguese: 'pt-PT',
      Russian: 'ru-RU',
      Arabic: 'ar-SA',
      Hindi: 'hi-IN',
      // Add more languages as needed
    };
    return languageMap[language] || 'en-US';
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    // Stop any ongoing recognition
    if (recognitionRef.current) {
      recognitionRef.current.onend = null; // Prevent onend from firing after stop
      recognitionRef.current.stop();
    }

    // Call the function to clear transcripts when starting a new recording
    if (onStartRecording) {
      onStartRecording();
    }

    const recognition = new SpeechRecognition();
    recognition.lang = getLanguageCode(sourceLang);
    recognition.continuous = false; // For better mobile compatibility
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = '';

      // Reconstruct the transcript from all results
      for (let i = 0; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }

      // Update the transcript state
      setTranscript(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error detected: ' + event.error);
      alert('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.onend = null; // Prevent onend from being called after stop
      recognitionRef.current.stop();
      setListening(false);
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
