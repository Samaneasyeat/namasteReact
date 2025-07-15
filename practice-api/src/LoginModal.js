import React, { useState } from 'react';
import './LoginModal.css';
import { useAuth } from './AuthContext';

const LoginModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [input, setInput] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation here
    login(input);
    onClose();
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal login-modal-2col">
        <div className="login-modal-info-col">
          <img src="/login-image.png" alt="Login illustration" className="login-modal-illustration-img" />
        </div>
        <div className="login-modal-form-col">
          <button className="login-modal-close" onClick={onClose}>&times;</button>
          <div className="login-modal-tabs login-modal-tabs-horizontal">
            <div className="login-modal-tab-group">
              <button className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>Personal Account</button>
              <button className={activeTab === 'sme' ? 'active' : ''} onClick={() => setActiveTab('sme')}>SME Account</button>
            </div>
          </div>
          <div className="login-modal-content">
            <h2>Login or Create an Account</h2>
            <label className="login-modal-heading" htmlFor="login-input">Email Id / Mobile Number</label>
            <input
              id="login-input"
              type="text"
              placeholder="Email Id / Mobile Number"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="login-modal-input"
            />
            <button className="login-modal-login-btn" onClick={handleLogin}>Login</button>
            <div className="login-modal-terms">
              By proceeding, you agree with our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> & Master User Agreement.
            </div>
            <div className="login-modal-or">Or</div>
            <button className="login-modal-google-btn">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="google-logo" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 