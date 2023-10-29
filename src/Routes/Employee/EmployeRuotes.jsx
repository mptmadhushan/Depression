import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './EmployeeDash';
import EmployeeActivities from './EmployeeActivities';


function EmployeRuotes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="EmployeeActivities" element={<EmployeeActivities/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default EmployeRuotes
