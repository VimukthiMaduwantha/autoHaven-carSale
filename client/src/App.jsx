import React from 'react'
import './App.css'
import NavBarView from './components/NavBarView'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import NavBarComp from './components/NavBarComp'
import { Divider } from '@mui/material'

function App() {
  return (
    <>
      <NavBarView />
      <NavBarComp />
      <Divider />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App