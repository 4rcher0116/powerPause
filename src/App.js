import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import Sidebar from './sidebar';
import Header from './components/Header1';
import CalltoAction from './components/CalltoAction';
import Pathway from './components/pathway/Pathway';


function App() {
  return (
    <div className="flex flex-row">
      <div className='flex w-auto'>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full'>
        <Header />
        <CalltoAction />
        <Pathway />
      </div>
      
    </div>
  );
}

export default App;
