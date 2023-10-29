import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './AdminHome';

function AdminRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AdminRoutes
