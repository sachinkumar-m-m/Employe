import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/Home'
import Create from './components/Create'
import Menu from './components/Menu'
import Update from './components/Update'



function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer position='top-center' autoclose={4000} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/update/:id`} element={<Update />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
