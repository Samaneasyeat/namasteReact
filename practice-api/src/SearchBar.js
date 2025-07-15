import React, { useState } from 'react';
import './SearchBar.css';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaBus, FaTrain, FaCar, FaExchangeAlt } from 'react-icons/fa';

const TABS = [
  { key: 'flights', label: 'Flights', icon: <FaPlane /> },
  { key: 'hotels', label: 'Hotels', icon: <FaHotel /> },
  { key: 'holidays', label: 'Holidays', icon: <FaUmbrellaBeach /> },
  { key: 'bus', label: 'Bus', icon: <FaBus /> },
  { key: 'trains', label: 'Trains', icon: <FaTrain /> },
  { key: 'cabs', label: 'Cabs', icon: <FaCar /> },
];

const SHOW_RIGHT_BUTTONS = ['flights', 'bus', 'trains', 'cabs'];

// Mock city data
const MOCK_CITIES = [
  { id: 1, name: "Delhi", state: "Delhi", code: "DEL" },
  { id: 2, name: "Mumbai", state: "Maharashtra", code: "BOM" },
  { id: 3, name: "Bangalore", state: "Karnataka", code: "BLR" },
  { id: 4, name: "Chennai", state: "Tamil Nadu", code: "MAA" },
  { id: 5, name: "Hyderabad", state: "Telangana", code: "HYD" },
  { id: 6, name: "Jaipur", state: "Rajasthan", code: "JAI" },
  { id: 7, name: "Kolkata", state: "West Bengal", code: "CCU" },
  { id: 8, name: "Pune", state: "Maharashtra", code: "PNQ" },
  { id: 9, name: "Ahmedabad", state: "Gujarat", code: "AMD" },
  { id: 10, name: "Chandigarh", state: "Punjab", code: "IXC" },
  { id: 11, name: "Lucknow", state: "Uttar Pradesh", code: "LKO" },
  { id: 12, name: "Indore", state: "Madhya Pradesh", code: "IDR" },
  { id: 13, name: "Varanasi", state: "Uttar Pradesh", code: "VNS" },
  { id: 14, name: "Patna", state: "Bihar", code: "PAT" },
  { id: 15, name: "Bhopal", state: "Madhya Pradesh", code: "BHO" },
  { id: 16, name: "Nagpur", state: "Maharashtra", code: "NAG" },
  { id: 17, name: "Vadodara", state: "Gujarat", code: "BDQ" },
  { id: 18, name: "Surat", state: "Gujarat", code: "STV" },
  { id: 19, name: "Kanpur", state: "Uttar Pradesh", code: "KNU" },
  { id: 20, name: "Agra", state: "Uttar Pradesh", code: "AGR" },
  { id: 21, name: "Vishakhapatnam", state: "Andhra Pradesh", code: "VTZ" },
  { id: 22, name: "Coimbatore", state: "Tamil Nadu", code: "CJB" },
  { id: 23, name: "Madurai", state: "Tamil Nadu", code: "IXM" },
  { id: 24, name: "Kochi", state: "Kerala", code: "COK" },
  { id: 25, name: "Thiruvananthapuram", state: "Kerala", code: "TRV" },
  { id: 26, name: "Guwahati", state: "Assam", code: "GAU" },
  { id: 27, name: "Imphal", state: "Manipur", code: "IMF" },
  { id: 28, name: "Shillong", state: "Meghalaya", code: "SHL" },
  { id: 29, name: "Aizawl", state: "Mizoram", code: "AJL" },
  { id: 30, name: "Kohima", state: "Nagaland", code: "KOH" },
  { id: 31, name: "Itanagar", state: "Arunachal Pradesh", code: "HGI" },
  { id: 32, name: "Gangtok", state: "Sikkim", code: "GAY" },
  { id: 33, name: "Agartala", state: "Tripura", code: "IXA" },
  { id: 34, name: "Bhubaneswar", state: "Odisha", code: "BBI" },
  { id: 35, name: "Ranchi", state: "Jharkhand", code: "IXR" },
  { id: 36, name: "Raipur", state: "Chhattisgarh", code: "RPR" },
  { id: 37, name: "Jodhpur", state: "Rajasthan", code: "JDH" },
  { id: 38, name: "Udaipur", state: "Rajasthan", code: "UDR" },
  { id: 39, name: "Amritsar", state: "Punjab", code: "ATQ" },
  { id: 40, name: "Ludhiana", state: "Punjab", code: "LUH" },
  { id: 41, name: "Dehradun", state: "Uttarakhand", code: "DED" },
  { id: 42, name: "Shimla", state: "Himachal Pradesh", code: "SLV" },
  { id: 43, name: "Srinagar", state: "Jammu & Kashmir", code: "SXR" },
  { id: 44, name: "Leh", state: "Ladakh", code: "IXL" },
  { id: 45, name: "Port Blair", state: "Andaman & Nicobar", code: "IXZ" },
  { id: 46, name: "Panaji", state: "Goa", code: "GOI" },
  { id: 47, name: "Puducherry", state: "Puducherry", code: "PNY" },
  { id: 48, name: "Daman", state: "Daman & Diu", code: "NMB" },
  { id: 49, name: "Silvassa", state: "Dadra & Nagar Haveli", code: "SIL" },
  { id: 50, name: "Kavaratti", state: "Lakshadweep", code: "KVA" },
];

export default function SearchBar() {
  const [selectedTab, setSelectedTab] = useState('flights');
  const [departFrom, setDepartFrom] = useState({ name: "New Delhi", state: "Delhi", code: "NDLS" });
  const [goingTo, setGoingTo] = useState({ name: "Mumbai Central", state: "Maharashtra", code: "BCT" });
  const [departDate, setDepartDate] = useState({ date: "15 Jul'25", day: "Tuesday" });
  const [returnDate, setReturnDate] = useState(null);
  const [travellers, setTravellers] = useState({ count: 1, class: "Economy" });
  
  // Dropdown states
  const [showDepartDropdown, setShowDepartDropdown] = useState(false);
  const [showGoingDropdown, setShowGoingDropdown] = useState(false);
  const [departSearch, setDepartSearch] = useState("");
  const [goingSearch, setGoingSearch] = useState("");
  const [filteredDepartCities, setFilteredDepartCities] = useState(MOCK_CITIES);
  const [filteredGoingCities, setFilteredGoingCities] = useState(MOCK_CITIES);

  const handleDepartSearch = (value) => {
    setDepartSearch(value);
    const filtered = MOCK_CITIES.filter(city => 
      city.name.toLowerCase().includes(value.toLowerCase()) ||
      city.state.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDepartCities(filtered);
  };

  const handleGoingSearch = (value) => {
    setGoingSearch(value);
    const filtered = MOCK_CITIES.filter(city => 
      city.name.toLowerCase().includes(value.toLowerCase()) ||
      city.state.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGoingCities(filtered);
  };

  const selectDepartCity = (city) => {
    setDepartFrom(city);
    setShowDepartDropdown(false);
    setDepartSearch("");
  };

  const selectGoingCity = (city) => {
    setGoingTo(city);
    setShowGoingDropdown(false);
    setGoingSearch("");
  };

  const swapCities = () => {
    const temp = departFrom;
    setDepartFrom(goingTo);
    setGoingTo(temp);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-top-row">
        <div className="searchbar-tabs">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`searchbar-tab${selectedTab === tab.key ? ' active' : ''}`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        {SHOW_RIGHT_BUTTONS.includes(selectedTab) && (
          <div className="searchbar-right-buttons">
            <button className="searchbar-advisory-btn">&#9432; Travel Advisory</button>
            <button className="searchbar-covid-btn">&#8377; Claim your Covid Refund</button>
          </div>
        )}
      </div>
      <div className="searchbar-form-row">
        <div className="searchbar-form-group">
          <label>Depart From</label>
          <div 
            className="searchbar-form-value clickable"
            onClick={() => setShowDepartDropdown(true)}
          >
            {departFrom.name}
          </div>
          <div className="searchbar-form-sub">{departFrom.code}</div>
          {showDepartDropdown && (
            <div className="searchbar-dropdown">
              <input
                type="text"
                placeholder="Search cities..."
                value={departSearch}
                onChange={(e) => handleDepartSearch(e.target.value)}
                className="searchbar-dropdown-input"
                autoFocus
              />
              <div className="searchbar-dropdown-list">
                {filteredDepartCities.map(city => (
                  <div
                    key={city.id}
                    className="searchbar-dropdown-item"
                    onClick={() => selectDepartCity(city)}
                  >
                    <div className="searchbar-dropdown-city">{city.name}, {city.state}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="searchbar-swap-icon" onClick={swapCities}>
          <FaExchangeAlt />
        </div>
        
        <div className="searchbar-form-group">
          <label>Going To</label>
          <div 
            className="searchbar-form-value clickable"
            onClick={() => setShowGoingDropdown(true)}
          >
            {goingTo.name}
          </div>
          <div className="searchbar-form-sub">{goingTo.code}</div>
          {showGoingDropdown && (
            <div className="searchbar-dropdown">
              <input
                type="text"
                placeholder="Search cities..."
                value={goingSearch}
                onChange={(e) => handleGoingSearch(e.target.value)}
                className="searchbar-dropdown-input"
                autoFocus
              />
              <div className="searchbar-dropdown-list">
                {filteredGoingCities.map(city => (
                  <div
                    key={city.id}
                    className="searchbar-dropdown-item"
                    onClick={() => selectGoingCity(city)}
                  >
                    <div className="searchbar-dropdown-city">{city.name}, {city.state}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="searchbar-form-group">
          <label>Depart Date</label>
          <div className="searchbar-form-value">
            {departDate.date} <span className="searchbar-form-month">{departDate.day}</span>
          </div>
        </div>
        
        <div className="searchbar-form-group">
          <label>Return Date</label>
          <div className="searchbar-form-value">
            <span className="searchbar-form-placeholder">Book Round Trip to save extra</span>
          </div>
        </div>
        
        <div className="searchbar-form-group">
          <label>Travellers & Class</label>
          <div className="searchbar-form-value">{travellers.count} Traveller</div>
          <div className="searchbar-form-sub">{travellers.class}</div>
        </div>
        
        <div className="searchbar-form-search">
          <button className="searchbar-search-btn">Search</button>
        </div>
      </div>
    </div>
  );
} 