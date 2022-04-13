import React,{ useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Results from './pages/Results'
import * as L from 'leaflet'
import IpContext from './store/ip-context'
import {motion} from 'framer-motion'

function App() {
 
  return (
    
    <main className="App">
        <Home />
    </main>
    
  )
}

export default App
