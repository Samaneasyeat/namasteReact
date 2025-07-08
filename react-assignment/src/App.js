import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Option 1: Mock AI response (for testing)
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a simple response based on user input
      const mockResponse = generateMockResponse(input);
      
      const aiResponse = {
        id: Date.now() + 1,
        text: mockResponse,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiResponse]);

      // Option 2: Uncomment below to use a different free API
      /*
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: input
            }
          ],
          max_tokens: 150
        },
        {
          headers: {
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
            'Content-Type': 'application/json'
          }
        }
      );

      const aiResponse = {
        id: Date.now() + 1,
        text: response.data.choices[0].message.content,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiResponse]);
      */

    } catch (error) {
      console.error('Error:', error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please check your internet connection and try again.",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to generate mock responses
  const generateMockResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! How can I help you today?";
    } else if (input.includes('how are you')) {
      return "I'm doing well, thank you for asking! How can I assist you?";
    } else if (input.includes('weather')) {
      return "I can't check the weather in real-time, but I'd recommend checking a weather app or website for accurate information!";
    } else if (input.includes('name')) {
      return "I'm your AI assistant! Nice to meet you!";
    } else if (input.includes('help')) {
      return "I'm here to help! You can ask me questions, and I'll do my best to assist you.";
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (input.includes('bye') || input.includes('goodbye')) {
      return "Goodbye! Have a great day!";
    } else {
      return "That's an interesting question! I'm currently running in demo mode, but I'd be happy to help with general questions. For more advanced features, you could integrate with a real AI API like OpenAI or use a different free service.";
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-content">
            <span className="header-icon">✨</span>
            <h1>AI Assistant</h1>
            <p>Ask me anything!</p>
          </div>
          {messages.length > 0 && (
            <button onClick={clearChat} className="clear-btn">
              Clear Chat
            </button>
          )}
        </div>

        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <span className="welcome-icon">🤖</span>
              <h2>Welcome to AI Assistant!</h2>
              <p>I'm here to help you with any questions you might have. Just type your question below and I'll do my best to answer it.</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-timestamp">{message.timestamp}</div>
                </div>
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="message ai-message">
              <div className="message-avatar">
                🤖
              </div>
              <div className="message-content">
                <div className="loading-indicator">
                  <span className="loading-icon">⏳</span>
                  <span>AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="message-input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="send-button"
            >
              ➤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
