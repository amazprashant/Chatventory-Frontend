import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ManageClient from "../pages/ManageClient";
import ManageOperator from "../pages/ManageOperator";
import JobCard from "../pages/JobCard";
import Reports from "../pages/Reports";
import EditProfile from "../pages/EditProfile";
import Contact from "../pages/Contact";
import NotFoundPage from '../pages/NotFoundPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element = {<Dashboard/>} />
        <Route path="manage-clients" element = {<ManageClient/>} />
        <Route path="manage-operators" element = {<ManageOperator/>} />
        <Route path="job-cards" element = {<JobCard/>} />
        <Route path="reports" element = {<Reports/>} />
        <Route path="edit-profile" element = {<EditProfile/>} />
        <Route path="contact" element = {<Contact/>} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
      