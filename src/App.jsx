import React,{ useState } from 'react'
import './App.css'
import Home from './pages/Home'
import * as L from 'leaflet'
import IpContext from './store/ip-context'
import {motion} from 'framer-motion'
import MainHeader from './components/UI/MainHeader'

function App() {
 
  return (
    
    <main className="App">
       <MainHeader />
        <Home />
    </main>
    
  )
}

export default App
