import React from "react";
import Home from './Home';
import Pokedex from './Pokedex';
import New from './New';
import About from './About';
import Contact from './Contact';
import Undefinedroute from './Undefinedroute';
import { Route, Routes, Navigate } from 'react-router-dom'


const Main = () => {
  return <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokedex' element={<Pokedex/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<Undefinedroute/>} />
    </Routes>

  </main>;
};

export default Main;
