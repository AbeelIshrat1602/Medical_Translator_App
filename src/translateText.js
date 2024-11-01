// src/translateText.js
import axios from 'axios';

const translateText = async (text, sourceLang, targetLang) => {
  const prompt = `You are a medical translator. Translate the following text from ${sourceLang} to ${targetLang}, ensuring the accuracy of medical terminology:\n\n"${text}"`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1000,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default translateText;
