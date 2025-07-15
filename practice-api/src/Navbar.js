import React, { useState, useRef, useEffect } from 'react';
import { FaBriefcase, FaChevronDown, FaPhone, FaVolumeUp, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import LoginModal from './LoginModal';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

function getDisplayName(user) {
  if (!user) return '';
  if (user.includes('@')) {
    const namePart = user.split('@')[0];
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  }
  return user.charAt(0).toUpperCase() + user.slice(1);
}

const Navbar = () => {
  const [showSmeDropdown, setShowSmeDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const smeDropdownRef = useRef();
  const supportDropdownRef = useRef();
  const profileDropdownRef = useRef();
  const { isLoggedIn, user, logout } = useAuth();

  const handleSmeToggle = () => {
    setShowSmeDropdown((prev) => !prev);
    setShowSupportDropdown(false);
  };

  const handleSupportToggle = () => {
    setShowSupportDropdown((prev) => !prev);
    setShowSmeDropdown(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        smeDropdownRef.current &&
        !smeDropdownRef.current.contains(e.target)
      ) {
        setShowSmeDropdown(false);
      }
      if (
        supportDropdownRef.current &&
        !supportDropdownRef.current.contains(e.target)
      ) {
        setShowSupportDropdown(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(e.target)
      ) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">Yatra</a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          {/* SME/Corporates */}
          <li ref={smeDropdownRef} className="nav-item">
            <button className="sme-button" onClick={handleSmeToggle}>
              <FaBriefcase style={{ marginRight: '6px' }} />
              SME/Corporates
              <FaChevronDown style={{ marginLeft: '6px' }} />
            </button>
            {showSmeDropdown && (
              <div className="dropdown">
                <ul>
                  <li>
                    Corporate Travel
                    <br />
                    <span className="dropdown-subtext">
                      Book & Manage your Business Travel
                    </span>
                  </li>
                  <li>
                    Yatra M.I.C.E
                    <br />
                    <span className="dropdown-subtext">
                      Meetings, Incentives, Conferences, Events
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* For Travel Agents */}
          <li>
            <button className="nav-btn sme-button">
              <FaVolumeUp style={{ marginRight: '6px' }} />
              For Travel Agents
            </button>
          </li>

          {/* Support */}
          <li ref={supportDropdownRef} className="nav-item">
            <button className="nav-btn sme-button" onClick={handleSupportToggle}>
              <FaPhone style={{ marginRight: '6px' }} />
              Support
              <FaChevronDown style={{ marginLeft: '6px' }} />
            </button>
            {showSupportDropdown && (
              <div className="dropdown">
             <ul>
  <li>
    Customer Care
    <br />
    <span className="dropdown-subtext">
      Check Your Refunds
    </span>
  </li>
  <li>
    Contact Us
    <br />
    <span className="dropdown-subtext">
      Reach our Support Team
    </span>
  </li>
  <li>
    Complete your Booking
    <br />
    <span className="dropdown-subtext">
      Resume your pending reservations
    </span>
  </li>
  <li>
    Make a Payment
    <br />
    <span className="dropdown-subtext">
      Pay for incomplete bookings
    </span>
  </li>
  <li>
    Flight Cancellation
    <br />
    <span className="dropdown-subtext">
      Cancel your flight bookings
    </span>
  </li>
  <li>
    Career
    <br />
    <span className="dropdown-subtext">
      Explore job opportunities
    </span>
  </li>
</ul>

              </div>
            )}
          </li>

          {/* Offers */}
          <li>
            <button className="nav-btn sme-button">
              Offers
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {!isLoggedIn ? (
          <button className="login-btn" onClick={() => setShowLoginModal(true)}>Login / Signup</button>
        ) : (
          <div className="profile-menu-wrapper" ref={profileDropdownRef}>
            <button className="profile-btn" onClick={() => setShowProfileDropdown((v) => !v)}>
              <span className="profile-icon">
                {user && user.includes('@') ? user.split('@')[0][0].toUpperCase() : (user ? user[0].toUpperCase() : '?')}
              </span>
              <FaChevronDown style={{ marginLeft: '2px' }} />
            </button>
            {showProfileDropdown && (
              <div className="dropdown profile-dropdown">
                <ul>
                  <li><Link to="/my-booking">My Booking</Link></li>
                  <li><Link to="/my-refund">My Refund</Link></li>
                  <li><Link to="/my-ecash">My eCash</Link></li>
                  <li><Link to="/my-profile">My Profile</Link></li>
                  <hr className="profile-dropdown-divider" />
                  <li onClick={logout} className="logout-option" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </nav>
  );
};

export default Navbar;
