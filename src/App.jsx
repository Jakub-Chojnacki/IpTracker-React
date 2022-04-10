import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Results from './pages/Results'

function App() {
  

  return (
    <div className="App">
      <h1>Welcome to Ip-Tracker</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="results" element={<Results />}/>
      </Routes>
     
      
    </div>
  )
}

export default App
