import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Host from './pages/Host';


import './server';


function App() {

  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/host" element={<Host/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/vans' element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    
    
  )
}

export default App
