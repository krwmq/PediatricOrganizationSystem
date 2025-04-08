import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import Acil from './pages/acil';
import Asistan from './pages/asistan';
import Bolum from './pages/bolum';
import Duyuru from './pages/duyuru';
import Ogretim from './pages/ogretim';
import Quiz from './pages/quiz';
import Takvim from './pages/takvim';

import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acil' element={<Acil />} />
        <Route path='/asistan' element={<Asistan />} />
        <Route path='/bolum' element={<Bolum />} />
        <Route path='/duyuru' element={<Duyuru />} />
        <Route path='/ogretim' element={<Ogretim />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/takvim' element={<Takvim />} />
      </Routes>
    </div>
  )
}

export default App
