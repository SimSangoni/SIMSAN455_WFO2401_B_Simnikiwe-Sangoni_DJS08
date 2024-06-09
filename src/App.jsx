import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

// PAGE COMPONENT IMPORTS
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';

// LAY OUT COMPONENT IMPORTS
import Layout from './components/Layout';
import HostLayout from './components/HostLayout'


// HOST LAYOUT IMPORTS
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'


import './server';



function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path='vans' element={<Vans/>}/>
            <Route path="vans/:id" element={<VanDetail />} />

          <Route path='host' element={< HostLayout/>}>
            <Route index element={< Dashboard/>} />
            <Route path='income' element={< Income/>} />
            <Route path='reviews' element={< Reviews/>} />
          </Route>

        
         
          </Route> 
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
