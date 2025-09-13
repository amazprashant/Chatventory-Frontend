import { NavLink, useLocation } from "react-router-dom";

export default function AppSidebar() {
  const location = useLocation();

  // Only check email-related routes
  const isEmailMenuActive = [
    "/sender-email",
    "/templates",
    "/mailing-lists",
    "/history",
  ].some((path) => location.pathname.startsWith(path));

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Main</li>

        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-graph-up"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/manage-roles"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-people-fill"></i>
            <span>Roles</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/manage-users"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-person-lines-fill"></i>
            <span>Users</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/manage-customers"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-journal-check"></i>
            <span>Customers</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/prospects"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-file-earmark-bar-graph"></i>
            <span>Prospects</span>
          </NavLink>
        </li>

        {/* Emails Dropdown */}
        <li className="nav-item">
          <a
            className={`nav-link ${isEmailMenuActive ? "" : "collapsed"}`}
            data-bs-target="#emails-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-ui-checks-grid"></i>
            <span>Emails</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="emails-nav"
            className={`nav-content collapse ${isEmailMenuActive ? "show" : ""}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <NavLink
                to="/sender-email"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-dot"></i>
                <span>Sender Emails</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/templates"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-dot"></i>
                <span>Templates</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mailing-lists"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-dot"></i>
                <span>Mailing Lists</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-dot"></i>
                <span>History</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Settings</li>

        <li className="nav-item">
          <NavLink
            to="/edit-profile"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-gear-fill"></i>
            <span>Edit Profile</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : "collapsed"}`}
          >
            <i className="bi bi-chat-dots-fill"></i>
            <span>Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
