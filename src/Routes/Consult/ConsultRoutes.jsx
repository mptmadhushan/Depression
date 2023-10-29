import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ConsultantHome from './ConsultantHome';
import EmployeeHistory from './EmployeeHistory';
import VoiceDetectionHistory from './VoiceDetectionHistory';

function ConsultRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Dashboard" element={<ConsultantHome/>}/>
        <Route path="EmployeeHistory" element={<EmployeeHistory/>}/>
        <Route path="VoiceDetectionHistory" element={<VoiceDetectionHistory/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default ConsultRoutes
