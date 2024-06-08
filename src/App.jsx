import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';

import Host from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'


import './server';

/**
 * Challenge:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */


function App() {

  return (

    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/vans' element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path='/host' element={< Host/>} />
            <Route path='/host/income' element={< Income/>} />
            <Route path='/host/reviews' element={< Reviews/>} />
          </Route> 
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
