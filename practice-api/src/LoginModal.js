import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [input, setInput] = useState('');

  return (
    <div className="login-modal-overlay">
      <div className="login-modal login-modal-2col">
        <div className="login-modal-info-col">
          <div className="login-modal-illustration">
            {/* You can add an <img> here for illustration if you want */}
          </div>
          <ul className="login-modal-info-list">
            <li>Unlock Exclusive Deals on every booking</li>
            <li>Zero Convenience Fee with Yatra Prime</li>
            <li>Easily View, Modify, or Cancel Bookings</li>
            <li>and more..</li>
          </ul>
        </div>
        <div className="login-modal-form-col">
          <button className="login-modal-close" onClick={onClose}>&times;</button>
          <div className="login-modal-tabs login-modal-tabs-horizontal">
            <button className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>Personal Account</button>
            <button className={activeTab === 'sme' ? 'active' : ''} onClick={() => setActiveTab('sme')}>SME Account</button>
          </div>
          
          <div className="login-modal-content">
          <p className="login-modal-heading">Login Or Create Account</p>
          <p className="login-modal-heading">Email Id / Mobile Number</p>
            <input
              type="text"
              placeholder="Email Id / Mobile Number"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="login-modal-input"
            />
            <button className="login-modal-login-btn">Login</button>
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