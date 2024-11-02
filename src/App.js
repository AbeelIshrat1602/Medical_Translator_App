// src/App.js

import React, { useState, useEffect } from 'react';
import VoiceRecorder from './VoiceRecorder';
import translateText from './translateText';
import './styles.css';

function App() {
  const [originalTranscript, setOriginalTranscript] = useState('');
  const [translatedTranscript, setTranslatedTranscript] = useState('');
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [isTranslating, setIsTranslating] = useState(false);

  // Function to clear transcripts when starting a new recording
  const handleStartRecording = () => {
    setOriginalTranscript('');
    setTranslatedTranscript('');
  };

  // Function to map language names to language codes
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

  // Speak function for speech synthesis
  const speak = (text, language) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const langCode = getLanguageCode(language);

      const speakText = () => {
        const voices = synth.getVoices();
        const voice = voices.find(
          (v) => v.lang === langCode || v.lang.startsWith(langCode.split('-')[0])
        );

        if (voice) {
          synth.cancel(); // Stop any ongoing speech
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = voice;
          utterance.lang = voice.lang;
          synth.speak(utterance);
        } else {
          alert(`No voice available for the language: ${language}.`);
        }
      };

      if (synth.getVoices().length === 0) {
        synth.onvoiceschanged = speakText;
      } else {
        speakText();
      }
    } else {
      alert('Sorry, your browser does not support speech synthesis.');
    }
  };

  // Effect to handle translation when original transcript changes
  useEffect(() => {
    const translate = async () => {
      if (originalTranscript) {
        setIsTranslating(true);
        try {
          const translation = await translateText(originalTranscript, sourceLang, targetLang);
          setTranslatedTranscript(translation);
        } catch (error) {
          setTranslatedTranscript('Translation failed. Please try again.');
          console.error(error);
        } finally {
          setIsTranslating(false);
        }
      }
    };
    translate();
  }, [originalTranscript, sourceLang, targetLang]);

  return (
    <div className="app-container">
      <h1>Healthcare Translation App</h1>
  
      <div className="language-selection">
        <label>
          Input Language
          <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
            {/* Language options */}
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="Korean">Korean</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Arabic">Arabic</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>
  
        <label>
          Output Language
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            {/* Language options */}
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="Korean">Korean</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Arabic">Arabic</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>
      </div>
  
      <VoiceRecorder
        setTranscript={setOriginalTranscript}
        sourceLang={sourceLang}
        onStartRecording={handleStartRecording}
      />
  
      <div className="transcripts">
        <div className="transcript-section">
          <h2>Original Transcript ({sourceLang})</h2>
          <p>{originalTranscript || 'Your speech will appear here...'}</p>
        </div>
        <div className="transcript-section">
          <h2>Translated Transcript ({targetLang})</h2>
          <p>{isTranslating ? 'Translating...' : translatedTranscript || 'Translation will appear here...'}</p>
          <button
            onClick={() => speak(translatedTranscript, targetLang)}
            disabled={!translatedTranscript}
          >
            Speak
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
