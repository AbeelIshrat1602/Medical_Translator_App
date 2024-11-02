# **Nao Medical Healthcare Translation App**

Welcome to the **Nao Medical Healthcare Translation App**! This web application is designed to facilitate real-time communication in healthcare settings by translating spoken language between multiple languages. It leverages advanced AI technology to transcribe speech, translate text, and vocalize translations, bridging language barriers between healthcare providers and patients.

![App Screenshot](screenshot.png)

---

## **Table of Contents**

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Supported Languages](#supported-languages)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## **Features**

- **Real-Time Speech Recognition**: Converts spoken words into text instantly.
- **AI-Powered Translation**: Translates text between multiple languages using OpenAI's GPT-3.5 model.
- **Speech Synthesis**: Vocalizes translated text in the target language.
- **User-Friendly Interface**: Intuitive design with responsive layout for various devices.
- **Multilingual Support**: Supports a wide range of languages for both input and output.
- **Cross-Platform Compatibility**: Works on desktop and Android devices with modern browsers.

---

## **Demo**

Check out the live demo of the app [here](https://medical-translator-app.vercel.app/).

**Note**: Replace `yhttps://medical-translator-app.vercel.app/` with the actual URL of your deployed app.

---

## **Technologies Used**

- **React**: Front-end JavaScript library for building user interfaces.
- **Web Speech API**: Used for speech recognition and speech synthesis.
- **OpenAI API**: Provides AI-powered translation services.
- **CSS**: Styling and layout.
- **Vercel**: Deployment platform for hosting the app.

---

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- **Node.js** (v12 or higher) and **npm** installed on your machine.
- A modern web browser (preferably Google Chrome) for testing.
- An **OpenAI API Key**. You can obtain one by signing up at [OpenAI](https://openai.com/).

---

## **Installation**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/nao-medical-translation-app.git
```

### **2. Navigate to the Project Directory**

```bash
cd nao-medical-translation-app
```

### **3. Install Dependencies**

```bash
npm install
```

---

## **Usage**

### **1. Set Up Environment Variables**

Create a `.env` file in the root directory and add your OpenAI API key:

```bash
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Do not commit the `.env` file to version control to keep your API key secure.

### **2. Start the Development Server**

```bash
npm start
```

- The app will run locally on `http://localhost:3000`.
- The development server supports hot reloading, so any changes you make will reflect immediately.

### **3. Build for Production**

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `build` folder with all the necessary files.

---

## **Environment Variables**

The app requires the following environment variable:

- `REACT_APP_OPENAI_API_KEY`: Your OpenAI API key for accessing translation services.

---

## **Supported Languages**

The app currently supports the following languages:

- English
- Spanish
- French
- German
- Chinese
- Japanese
- Italian
- Korean
- Portuguese
- Russian
- Arabic
- Hindi

---

## **Project Structure**

```
nao-medical-translation-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── VoiceRecorder.js
│   ├── translateText.js
│   ├── styles.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

- **`public/`**: Contains static files and the main HTML file.
- **`src/`**: Contains the source code of the application.
  - **`App.js`**: Main component that renders the app and manages state.
  - **`VoiceRecorder.js`**: Handles speech recognition functionality.
  - **`translateText.js`**: Contains the function to translate text using OpenAI API.
  - **`styles.css`**: CSS file for styling the app.
  - **`index.js`**: Entry point of the React application.
- **`.env`**: Contains environment variables (should not be committed to version control).
- **`package.json`**: Lists dependencies and scripts.

---

## **Deployment**

### **Deploying to Vercel**

1. **Create a GitHub Repository**

   - Initialize a Git repository in your project directory.
   - Push the code to a new repository on GitHub.

2. **Sign Up for Vercel**

   - Go to [Vercel](https://vercel.com/) and sign up with your GitHub account.

3. **Import Project**

   - From the Vercel dashboard, click **"New Project"** and import your GitHub repository.

4. **Configure Environment Variables**

   - In your Vercel project settings, add the `REACT_APP_OPENAI_API_KEY` environment variable.

5. **Deploy**

   - Click **"Deploy"**. Vercel will build and deploy your app.

6. **Access Your App**

   - Once deployed, your app will be available at `https://your-app-url.vercel.app`.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   - Click the **"Fork"** button at the top-right corner of the repository page.

2. **Clone the Forked Repository**

   ```bash
   git clone https://github.com/your-username/nao-medical-translation-app.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Implement your feature or fix bugs.

5. **Commit Your Changes**

   ```bash
   git commit -m "Add your commit message here"
   ```

6. **Push to Your Forked Repository**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   - Go to your forked repository on GitHub.
   - Click **"Compare & pull request"**.
   - Provide a description of your changes and submit the pull request.

---

## **License**

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more details.

---

## **Contact**

For questions or support, please contact:



---

## **Acknowledgments**

- **OpenAI**: For providing the powerful language model used for translation.
- **MDN Web Docs**: For comprehensive documentation on Web APIs.
- **React Community**: For the excellent resources and support.

---

## **Security Considerations**

- **API Key Protection**: Ensure your OpenAI API key is kept secure and not exposed in the client-side code or committed to version control.
- **Usage Monitoring**: Keep track of your API usage to prevent unexpected charges.
- **Data Privacy**: Be mindful of the data transmitted to the OpenAI API, especially if used in a healthcare setting.

---

## **Disclaimer**

This app is intended for educational and facilitative purposes. It should not be used as a substitute for professional translation services in critical healthcare situations. Always ensure that communications are clear and accurate, especially when dealing with sensitive medical information.

---

**Thank you for using the Nao Medical Healthcare Translation App!**

---

# **Screenshots**

Include screenshots of the app to give users a visual understanding.

![Language Selection](screenshots/language-selection.png)

*Language selection interface.*

![Transcripts Display](screenshots/transcripts-display.png)

*Original and translated transcripts.*

---

# **FAQs**

**Q**: Why is speech recognition not working on my iPhone?

**A**: iOS devices (Safari and other browsers) have limited support for the Web Speech API's speech recognition feature. Please use a supported browser like Google Chrome on a desktop or Android device.

**Q**: How can I add more languages?

**A**: You can add more languages by updating the language selection in `App.js` and adding the corresponding language codes in `getLanguageCode` functions in both `App.js` and `VoiceRecorder.js`.

**Q**: Is my data secure?

**A**: The app does not store any personal data. Transcribed text is sent securely to the OpenAI API for translation, and no audio recordings are stored.

---

# **Future Enhancements**

- **Backend Integration**: Implement a backend server to handle API requests securely.
- **Improved UI/UX**: Enhance the user interface with more interactive elements and better accessibility.
- **Offline Support**: Explore options to enable limited functionality without an internet connection.
- **Additional Languages**: Expand the list of supported languages based on user needs.

---

# **Attribution**

Icons and graphics used in the app are sourced from [Font Awesome](https://fontawesome.com/) and are subject to their respective licenses.

---





