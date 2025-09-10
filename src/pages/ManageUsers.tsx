import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";


export default function ManageUsers() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    corporateId: "",
    role: "",
    profileImage: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, profileImage: e.target.files![0] }));
    }
  };

  const handleResetImage = () => {
    setFormData((prev) => ({ ...prev, profileImage: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("User Added Successfully!");
  };

  return (
    <>
      <AppHeader />
      <AppSidebar />
      <main id="main" className="main">
        <div className="row mb-3 align-items-center">
          {/* Left side: Title + Breadcrumb */}
          <div className="col-sm-4">
            <div className="pagetitle">
              <h1>Manage Users</h1>
              <Breadcrumb />
            </div>
          </div>

          {/* Right side: Filters + Add User */}
          <div className="col-sm-8">
            <div className="d-flex gap-3 justify-content-end align-items-end flex-wrap">
              {/* From Date */}
              <div>
                <label htmlFor="role_name" className="form-label">
                  Role Name
                </label>
                  <select className="form-select" name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>

              {/* To Date */}
              <div>
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                  <select className="form-select" name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Status</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>
              <button
                  className="btn btn-warning d-flex align-items-center"
                  onClick={() => setModalOpen(true)}
                >
                  <i className="bi bi-plus-circle me-1"></i> Clear Filter
                </button>
                
              {/* Add User button */}
              <div className="text-end">
                <button
                  className="btn btn-secondary d-flex align-items-center"
                  onClick={() => setModalOpen(true)}>
                  <i className="bi bi-plus-circle me-1"></i> Add User
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="content px-0">
                  <table id="example" className="table table-bordered table-striped nowrap" >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Corporate Id</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#001</td>
                        <td>John Doe</td>
                        <td>9876543210</td>
                        <td>Crane A</td>
                        <td>johndoe@craneboard.com</td>
                        <td>
                          <label className="switch">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-secondary' title='View'><i className='bi bi-eye-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#002</td>
                        <td>Jane Smith</td>
                        <td>9123456789</td>
                        <td>Crane B</td>
                        <td>janesmith@craneboard.com</td>
                        <td>
                          <label className="switch">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-secondary' title='View'><i className='bi bi-eye-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Add User">

          <div className="row g-3">
            {/* <form onSubmit={handleSubmit}> */}
            {/* First Name */}
            <div>
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="form-label">Email Id</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Corporate ID */}
            <div>
              <label className="form-label">Corporate ID</label>
              <input
                type="text"
                className="form-control"
                name="corporateId"
                value={formData.corporateId}
                onChange={handleChange}
                placeholder="Corporate ID"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="form-label">Role</label>
              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
            </div>

            {/* Profile Image */}
            <div>
              <label className="form-label">Upload Profile Image</label>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  onChange={handleImageChange}
                  hidden
                  id="profileImageInput"
                />
                <label htmlFor="profileImageInput" className="btn btn-warning">
                  Upload new photo
                </label>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleResetImage}
                >
                  Reset
                </button>
              </div>
              <small className="text-muted">
                Allowed JPG, GIF or PNG. Max size of 800K
              </small>
              <div className="mt-2">
                {formData.profileImage ? (
                  <img
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="Profile Preview"
                    className="img-thumbnail"
                    style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Default Avatar"
                    className="img-thumbnail"
                    style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </Modal>
      </main>

    </>
  )
}