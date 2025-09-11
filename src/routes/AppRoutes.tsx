import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ManageRoles from "../pages/ManageRoles";
import ManageUsers from "../pages/ManageUsers";
import Customers from "../pages/Customers";
import Reports from "../pages/Reports";
import Prospects from "../pages/Prospects";
import EditProfile from "../pages/EditProfile";
import Contact from "../pages/Contact";
import NotFoundPage from '../pages/NotFoundPage';
import SenderEmails from '../pages/SenderEmails';
import Templates from '../pages/Templates';
import MailingLists from '../pages/MailingLists';
import History from '../pages/History';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element = {<Dashboard/>} />
        <Route path="manage-clients" element = {<ManageRoles/>} />
        <Route path="manage-users" element = {<ManageUsers/>} />
        <Route path="manage-customers" element = {<Customers/>} />
        <Route path="prospects" element = {<Prospects/>} />
        <Route path="reports" element = {<Reports/>} />
        <Route path="edit-profile" element = {<EditProfile/>} />
        <Route path="contact" element = {<Contact/>} />
        <Route path="sender-email" element = {<SenderEmails/>} />
        <Route path="templates" element = {<Templates/>} />
        <Route path="mailing-lists" element = {<MailingLists/>} />
        <Route path="history" element = {<History/>} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
      