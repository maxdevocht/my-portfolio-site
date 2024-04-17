import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Links from './components/Links'
import './App.css'

export default function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Links />
      <p className="copyright"><i class="ri-copyright-fill"></i> 2024 Max de Vocht. All Rights Reserved</p>
    </>
  )
}
