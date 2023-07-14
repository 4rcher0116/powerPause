import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import Sidebar from './sidebar';


function App() {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}

export default App;
