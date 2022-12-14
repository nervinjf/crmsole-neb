import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './style/button.css'
import axios from 'axios';
import Navbarn from './page/Navbarn'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Registros from './page/Registros';
import Registrar from './page/Registrar';
import Home from './page/Home';
import Calendar from './page/Calendar'


function App() {

 

  return (
    <div className='body'>
   <HashRouter>
    <Navbarn/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/registrar' element={<Registrar />}/>
      <Route path='/registros' element={<Registros />}/>
      <Route path='/calendar' element={<Calendar />}/>
    </Routes>
   </HashRouter>
   </div>
  )
}

export default App
