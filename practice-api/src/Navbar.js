import React, { useState, useRef, useEffect } from 'react';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">Yatra</a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li ref={dropdownRef} className="nav-item">
            <button className="sme-button" onClick={handleDropdownToggle}>
              <FaBriefcase style={{ marginRight: '6px' }} />
              SME/Corporates
              <FaChevronDown style={{ marginLeft: '6px' }} />
            </button>
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li>
                    Corporate Travel
                    <br />
                    <span className="dropdown-subtext">Book & Manage your Business Travel</span>
                  </li>
                  <li>
                    Yatra M.I.C.E
                    <br />
                    <span className="dropdown-subtext">Meetings, Incentives, Conferences, Events</span>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li><button className="nav-btn">For Travel Agents</button></li>
          <li><button className="nav-btn">Support</button></li>
          <li><button className="nav-btn">Offers</button></li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Login / Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
