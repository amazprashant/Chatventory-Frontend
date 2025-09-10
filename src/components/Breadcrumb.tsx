// components/Breadcrumbs.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

// optional mapping for human-friendly labels
const breadcrumbNameMap: Record<string, string> = {
  "dashboard": "Dashboard",
  "manage-clients": "Manage Clients",
  "manage-users": "Manage Users",
  "job-cards": "Job Cards",
  "reports": "Reports",
  "edit-profile": "Edit Profile",
  "contact": "Contact",
  "manage-customers": "Manage Customers",
  "prospects":"Prospects",
  "emails":"Emails"
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const label = breadcrumbNameMap[value] || value;

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}>
              {!isLast ? (
                <Link to={routeTo}>{label}</Link>
              ) : (
                label
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
