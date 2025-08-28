import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ManageClient from "../pages/ManageClient";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element = {<Dashboard/>} />
        <Route path="manage-clients" element = {<ManageClient/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
      