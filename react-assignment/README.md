# AI Assistant Tool

A modern, beautiful AI chat interface built with React that allows you to ask questions and get AI-powered responses.

## Features

- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 💬 **Real-time Chat**: Interactive chat interface with message history
- 🤖 **AI Integration**: Powered by Hugging Face's DialoGPT model
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Fast & Lightweight**: Built with React and optimized for performance
- 🎯 **User-friendly**: Intuitive interface with clear visual feedback

## Screenshots

The app features a beautiful gradient background with a glass-morphism chat container, complete with:
- Header with AI assistant branding
- Welcome message for new users
- Chat bubbles with user and AI messages
- Loading states with animated indicators
- Clear chat functionality
- Responsive design for all screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd react-assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Setting up the AI API

The app currently uses Hugging Face's free inference API. To get it working:

1. **Get a free API token**:
   - Go to [Hugging Face](https://huggingface.co/)
   - Create a free account
   - Go to Settings → Access Tokens
   - Create a new token

2. **Update the API token**:
   - Open `src/App.js`
   - Find the line: `'Authorization': 'Bearer hf_xxx'`
   - Replace `hf_xxx` with your actual token

### Alternative AI APIs

You can easily switch to other AI services by modifying the API call in `src/App.js`:

#### OpenAI API
```javascript
const response = await axios.post(
  'https://api.openai.com/v1/chat/completions',
  {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: input }]
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);
```

#### Custom AI Service
```javascript
const response = await axios.post(
  'YOUR_AI_SERVICE_ENDPOINT',
  { message: input },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);
```

## Usage

1. **Start a conversation**: Type your question in the input field at the bottom
2. **Send messages**: Click the send button or press Enter
3. **View responses**: AI responses appear in chat bubbles
4. **Clear chat**: Use the "Clear Chat" button to start fresh
5. **Mobile friendly**: Works great on phones and tablets

## Features in Detail

### Chat Interface
- **Message History**: All conversations are stored in the current session
- **Timestamps**: Each message shows when it was sent
- **Loading States**: Visual feedback while AI is processing
- **Error Handling**: Graceful error messages if API is unavailable

### UI/UX Features
- **Smooth Animations**: Messages fade in with smooth transitions
- **Auto-scroll**: Chat automatically scrolls to latest messages
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Keyboard navigation and screen reader friendly

### Technical Features
- **React Hooks**: Uses modern React patterns
- **State Management**: Efficient state updates with useState
- **API Integration**: Axios for reliable HTTP requests
- **Error Boundaries**: Graceful error handling

## Customization

### Styling
The app uses CSS for styling. You can customize:
- Colors in `src/App.css`
- Layout and spacing
- Animations and transitions
- Typography and fonts

### Functionality
- Add new AI models by modifying the API call
- Implement message persistence with localStorage
- Add user authentication
- Integrate with other services

## Troubleshooting

### Common Issues

1. **API not working**:
   - Check your API token is correct
   - Ensure you have internet connection
   - Verify the API endpoint is accessible

2. **App not starting**:
   - Run `npm install` to install dependencies
   - Check Node.js version (14+ required)
   - Clear npm cache: `npm cache clean --force`

3. **Styling issues**:
   - Clear browser cache
   - Check CSS file is loading properly

### Performance Tips

- The app is optimized for performance
- Large chat histories may slow down on older devices
- Consider implementing virtual scrolling for very long conversations

## Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the console for error messages
3. Ensure all dependencies are installed correctly

---

**Enjoy your AI Assistant! 🤖✨**
