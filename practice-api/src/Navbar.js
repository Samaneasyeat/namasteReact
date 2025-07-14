import React, { useState, useRef, useEffect } from 'react';
import { FaBriefcase, FaChevronDown, FaPhone, FaVolumeUp } from 'react-icons/fa';
import './Navbar.css';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showSmeDropdown, setShowSmeDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const smeDropdownRef = useRef();
  const supportDropdownRef = useRef();

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
        <button className="login-btn" onClick={() => setShowLoginModal(true)}>Login / Signup</button>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </nav>
  );
};

export default Navbar;
