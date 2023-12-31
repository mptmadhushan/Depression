import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AdminRoutes from "./Routes/Admin/AdminRoutes";
// import ConsultRoutes from "./Routes/Consult/ConsultRoutes";
// import EmployeRuotes from "./Routes/Employee/EmployeRuotes";
// import Landing from "./Routes/Landing";
// import AdminHome from "./Routes/AdminHome";
// import VoiceDetectionHistory from "./Routes/VoiceDetectionHistory";

// import ConsultantHome from "./Routes/ConsultantHome";
// import EmployeeHistory from "./Routes/EmployeeHistory";
// import EmployeeDash from "./Routes/EmployeeDash";
// import EmployeeActivities from "./Routes/EmployeeActivities";
import Login from './Routes/Admin/Login';
import AdminDashboard from './Routes/Admin/AdminHome';

import ConsultantHome from './Routes/Consult/ConsultantHome';
import EmployeeHistory from './Routes/Consult/EmployeeHistory';
import VoiceDetectionHistory from './Routes/Consult/VoiceDetectionHistory';

import EmployeeDash from './Routes/Employee/EmployeeDash';
import EmployeeActivities from './Routes/Employee/EmployeeActivities';


function App() {

  
  const Logintype="";
  return (
  // <>
  //   {
  //     Logintype === "Admin"  ? <AdminRoutes/> :
      // Logintype === "Consult" ? <ConsultRoutes/> : <EmployeRuotes/>
      
  //   }
  // </>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="ConsultantHome" element={<ConsultantHome/>}/>
      <Route path="EmployeeHistory" element={<EmployeeHistory/>}/>
      <Route path="VoiceDetectionHistory" element={<VoiceDetectionHistory/>}/>
      <Route path="EmployeeDash" element={<EmployeeDash/>}/>
      <Route path="EmployeeActivities" element={<EmployeeActivities/>}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
