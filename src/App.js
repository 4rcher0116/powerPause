import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import Sidebar from './components/sidebar';
import bgImage from './screens/assets3/gradientlong.png';

import Title from './screens/Title';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompTester from './screens/CompTester';
import Napping from './screens/Napping';
import ExcercisePage from './screens/ExcercisePage';

function App() {
  return (
    <Router>
      <div className="flex flex-row h-full" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='flex w-auto'>
          <Sidebar />
        </div>

        <Routes>
          {/* <Route path="/exercise-page" element={<ExercisePage />} /> */}
          <Route path ="/exercise-page" element={<ExcercisePage />} />
          <Route path ="/napping-page" element={<Napping />} />
          <Route path="/" element={<CompTester />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
