import React, { useState } from "react";
import Navbar from './Navbar';

export default function CitySearch() {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const cities = [
    "Manali",
    "Madurai",
    "Mathura",
    "Mangalore",
    "Goa",
    "Delhi",
    "Mumbai",
    "Pune",
    "Hyderabad"
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter based on typed value
    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(filtered);
    setShowDropdown(true);
  };

  const handleFocus = () => {
    // On click/focus show full list
    setFilteredCities(cities);
    setShowDropdown(true);
  };

  const handleSelect = (city) => {
    setSearch(city);
    setShowDropdown(false);
  };

  const handleBlur = () => {
    // Timeout so click can register before blur hides
    setTimeout(() => setShowDropdown(false), 100);
  };

  return (
    <div style={{
      backgroundImage: `url(/beautiful-travel.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Navbar />
      <div style={{ width: "300px", margin: "50px auto", position: "relative" }}>
        <input
          type="text"
          placeholder="Search for a city..."
          value={search}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
        {showDropdown && filteredCities.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "5px",
              border: "1px solid #ccc",
              position: "absolute",
              width: "100%",
              background: "white",
              zIndex: 1000,
              maxHeight: "200px",
              overflowY: "auto"
            }}
          >
            {filteredCities.map((city, index) => (
              <li
                key={index}
                onClick={() => handleSelect(city)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee"
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
