import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path="Contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
