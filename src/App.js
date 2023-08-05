import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import Sidebar from './components/sidebar';

import Title from './screens/Title';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutVideos from './screens/Workout1Pathway';
import CompTester from './screens/CompTester';
import Napping from './screens/Napping';

function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <div className='flex w-auto'>
          <Sidebar />
        </div>

        <Routes>
          {/* <Route path="/exercise-page" element={<ExercisePage />} /> */}
          <Route path ="/exercise-page" element={<WorkoutVideos />} />
          <Route path ="/napping-page" element={<Napping />} />
          <Route path="/" element={<CompTester />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
