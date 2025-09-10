
export default function AppSidebar() {
    return (
        <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-heading">Main</li>

        <li className="nav-item">
            <a className="nav-link" href="/dashboard">
                <i className="bi bi-graph-up"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/manage-clients">
                <i className="bi bi-people-fill"></i>
                <span>Roles</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/manage-users">
                <i className="bi bi-person-lines-fill"></i>
                <span>Users</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/manage-customers">
                <i className="bi bi-journal-check"></i>
                <span>Customers</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/prospects">
                <i className="bi bi-file-earmark-bar-graph"></i>
                <span>Prospects</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-ui-checks-grid"></i><span>More Options</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className="bi bi-dot"></i><span>Option 1</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-dot"></i><span>Option 2</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-dot"></i><span>Option 3</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-dot"></i><span>Option 4</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="nav-heading">Settings</li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/edit-profile">
                <i className="bi bi-gear-fill"></i>
                <span>Edit Profile</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/edit-profile#change-password">
                <i className="bi bi-lock-fill"></i>
                <span>Change Password</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="error-404.php">
                <i className="bi bi-bug-fill"></i>
                <span>Error Page</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="contact">
                <i className="bi bi-chat-dots-fill"></i>
                <span>Contact Us</span>
            </a>
        </li>

    </ul>

</aside>
    )
}

