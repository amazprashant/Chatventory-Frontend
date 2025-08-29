// Breadcrumb.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // remove empty parts

  // Build breadcrumb items dynamically
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/", icon: "bi bi-house-door" }, // always add home
    ...pathnames.map((name, index) => {
      const href = "/" + pathnames.slice(0, index + 1).join("/");
      return { label: name.charAt(0).toUpperCase() + name.slice(1), href };
    }),
  ];

  return (
    <nav>
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {!isLast ? (
                <Link to={item.href!}>
                  {item.icon && <i className={`${item.icon} me-1`}></i>}
                  {item.label}
                </Link>
              ) : (
                <>
                  {item.icon && <i className={`${item.icon} me-1`}></i>}
                  {item.label}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
