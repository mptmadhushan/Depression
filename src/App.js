import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from "./Routes/Admin/AdminRoutes";
import ConsultRoutes from "./Routes/Consult/ConsultRoutes";
import EmployeRuotes from "./Routes/Employee/EmployeRuotes";
// import Landing from "./Routes/Landing";
// import AdminHome from "./Routes/AdminHome";
// import VoiceDetectionHistory from "./Routes/VoiceDetectionHistory";

// import ConsultantHome from "./Routes/ConsultantHome";
// import EmployeeHistory from "./Routes/EmployeeHistory";
// import EmployeeDash from "./Routes/EmployeeDash";
// import EmployeeActivities from "./Routes/EmployeeActivities";


function App() {

  
  const Logintype="";
  return (
  //   <BrowserRouter>
  
  //   <Routes>
  //     <Route path="/" element={<Landing />} />
  //     <Route path="AdminHome" element={<AdminHome />} />
  //     <Route path="EmployeeHistory" element={<EmployeeHistory />} />
  //     <Route path="ConsultantHome" element={<ConsultantHome />} />
  //     <Route path="EmployeeDash" element={<EmployeeDash />} />
  //     <Route path="EmployeeActivities" element={<EmployeeActivities />} />
  //     <Route path="VoiceDetectionHistory" element={<VoiceDetectionHistory />} />
  //   </Routes>
  // </BrowserRouter>

  <>
    {
      Logintype === "Admin"  ? <AdminRoutes/> :
      Logintype === "Consult" ? <ConsultRoutes/> : <EmployeRuotes/>
      
    }
  </>
  );
}

export default App;
