import React from "react";

export default function AppHeader() {
    return (
<header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
        <a href="dashboard.php" className="logo-header d-flex align-items-center">
            <img src="assets/img/CMS.png" alt="" />
        </a>
        <i className="bi bi-list toggle-sidebar-btn project-color"></i>
    </div>

    <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search"></i>
                </a>
            </li>

            <li className="nav-item dropdown">

                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell project-color"></i>
                    <span className="badge bg-primary badge-number">4</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                        You have 4 new notifications
                        <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                        <i className="bi bi-exclamation-circle text-warning"></i>
                        <div>
                            <h4>Lorem Ipsum</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>30 min. ago</p>
                        </div>
                    </li>

                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                        <i className="bi bi-x-circle text-danger"></i>
                        <div>
                            <h4>Atque rerum nesciunt</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>1 hr. ago</p>
                        </div>
                    </li>

                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                        <i className="bi bi-check-circle text-success"></i>
                        <div>
                            <h4>Sit rerum fuga</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>2 hrs. ago</p>
                        </div>
                    </li>

                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li className="notification-item">
                        <i className="bi bi-info-circle text-primary"></i>
                        <div>
                            <h4>Dicta reprehenderit</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>4 hrs. ago</p>
                        </div>
                    </li>

                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                        <a href="#">Show all notifications</a>
                    </li>

                </ul>

            </li>

            <li className="nav-item dropdown pe-3">

                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.png" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">Rajiv Gangwar</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                        <h6>Rajiv Gangwar</h6>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>


                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="login.php">
                            <i className="bi bi-power"></i>
                            <span>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

</header>
) 
}