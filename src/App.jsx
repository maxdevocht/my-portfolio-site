import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Links from './components/Links'
import linkdata from '../linkdata'
import './App.css'

export default function App() {

  const links = linkdata.map(item => {
    return (
      <Links 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Header />
      <section className="section--links">
        {links}
      </section>
    </>
  )
}
