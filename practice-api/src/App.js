import React, { useState } from "react";
import Navbar from './Navbar';
import { AuthProvider } from './AuthContext';
import SearchBar from './SearchBar';

export default function CitySearch() {
  return (
    <AuthProvider>
      <div style={{
        backgroundImage: `url(/beautiful-travel.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%'
      }}>
        <Navbar />
        <SearchBar />
      </div>
    </AuthProvider>
  );
}
