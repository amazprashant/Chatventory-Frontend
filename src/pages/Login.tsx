import React from "react";

export default function Login() {
  return (
    <main className="auth-wrapper">
      <div className="auth-box d-flex">
        {/* Left side with overlay */}
        <div className="auth-left">
          <div className="overlay">
            <h1>Welcome to CraneBoard</h1>
            <p>Manage operations with ease, precision, and style.</p>
          </div>
        </div>

        {/* Right side login form */}
        <div className="auth-right">
          <div className="card login-card shadow">
            <div className="card-body text-center">
              {/* Logo */}
              <div className="brand-logo">
                <a href="/dashboard">
                  <img src="/assets/img/CMS.png" alt="CraneBoard Logo" height="60" />
                </a>
              </div>

              <h4 className="mb-2">Log In</h4>
              <p className="text-muted">Enter your credentials to access CraneBoard</p>

              {/* Form */}
              <form>
                <div className="mb-3 text-start">
                  <label className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-key"></i>
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-box-arrow-in-right me-2"></i> Login
                  </button>
                </div>

                <div className="text-center">
                  <a href="/forgot-password" className="forgot-link">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
