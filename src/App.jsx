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


import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'


import './server';



function App() {

  /**
   * Challenge: Make the HostLayout component!
   * The HostLayout should use Links to navigate to the following
   * routes: 
   *    * Dashboard ("/host")
   *    * Income ("/host/income")
   *    * Reviews ("/host/reviews")
   * Then replace the parent "/host" route's element below with the
   * new HostLayout component you made.
   * 
   * NOTE: The dashboard route/page will be gone for now, but don't fret.
   * We'll be fixing that in the next lesson.
   */

  return (

    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/vans' element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail />} />

          <Route path='/host' element={< HostLayout/>}>
            <Route path='/host/income' element={< Income/>} />
            <Route path='/host/reviews' element={< Reviews/>} />
          </Route>

        
         
          </Route> 
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
