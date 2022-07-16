import React from 'react'
import Footer from '../components/Footer'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import '../css/app.css'

export default function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <Footer/>
    </div>
  )
}
