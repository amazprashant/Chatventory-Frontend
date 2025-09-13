import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";

export default function MailingLists() {
  const [roleName, setRoleName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalCommentOpen, setModalCommentOpen] = useState(false);
  const [isModalImportOpen, setModalImportOpen] = useState(false);
  const [isModalEmailOpen, setModalEmailOpen] = useState(false);
  const [isModalUploadOpen, setModalUploadOpen] = useState(false);
  const [isModalAddMailingOpen, setModalAddMailingOpen] = useState(false);
  const [permissions, setPermissions] = useState<{ [key: string]: string }>({
    dashboard: "na",
    roles: "na",
    users: "na",
    customers: "na",
    prospects: "na",
    emails: "na",
    test: "na",
  });

  const customers = [
    { firstName: "Test", lastName: "Test", email: "test122@gmail.com" },
    { firstName: "demo", lastName: "demo", email: "demo122@gmail.com" },
    { firstName: "sakshi", lastName: "sakshi", email: "sakshi122@gmail.com" },
  ];
  const handlePermissionChange = (screen: string, value: string) => {
    setPermissions((prev) => ({ ...prev, [screen]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Role Name:", roleName);
    console.log("Permissions:", permissions);
    alert("Role Added Successfully!");
  };
  // Email form state
  const [formData, setFormData] = useState({
    senderEmail: "",
    sendTo: "",
    prospects: "",
    subject: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <main id="main" className="main">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="pagetitle">
              <h1>Mailing Lists</h1>
              <Breadcrumb />
            </div>
          </div>
        </div>

        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <div className="row mt-3">
                {/* Left Side */}
                <div className="col-md-6">
                  {/* <h4>Mailing Lists</h4> */}
                </div>

                {/* Right Side */}
                <div className="col-md-6">
                  <div className="d-flex gap-3 justify-content-end align-items-end flex-wrap">
                    <button
                      className="btn btn-warning d-flex align-items-center"
                      onClick={() => setModalUploadOpen(true)}>Upload</button>
                    <button
                      className="btn btn-warning d-flex align-items-center"
                      onClick={() => setModalAddMailingOpen(true)}>Add Mailing List</button>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="content px-0">
                  <table id="example" className="table nowrap table-bordered table-striped" >
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Customer List</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link p-0 icon icon-sm icon-warning"
                            onClick={() => setModalCommentOpen(true)}
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link p-0 icon icon-sm icon-warning"
                            onClick={() => setModalCommentOpen(true)}
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link p-0 icon icon-sm icon-warning"
                            onClick={() => setModalCommentOpen(true)}
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link p-0 icon icon-sm icon-warning"
                            onClick={() => setModalCommentOpen(true)}
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                        </td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link p-0 icon icon-sm icon-warning"
                            onClick={() => setModalCommentOpen(true)}
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                        </td>
                        <td>
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
        <Modal isOpen={isModalAddMailingOpen} onClose={() => setModalAddMailingOpen(false)} title="Send Email">
          <form onSubmit={handleSubmit}>
            {/* Subject */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>
            {/* Send To Options */}
            <div className="mb-3">
              <label className="form-label">Type</label>
              <div className="d-flex flex-wrap gap-3">
                {[
                  "Email",
                  "Customer Name",
                ].map((option) => (
                  <div key={option} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sendTo"
                      value={option}
                      checked={formData.sendTo === option}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Prospects */}
            <div className="mb-3">
              <label className="form-label">Customer List</label>
              <select
                className="form-select"
                name="prospects"
                value={formData.prospects}
                onChange={handleChange}
              >
                <option value="">Select an Option</option>
                <option value="prospect1">Prospect 1</option>
                <option value="prospect2">Prospect 2</option>
              </select>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setModalEmailOpen(false)}>
                Close
              </button>
              <button type="submit" className="btn btn-warning">
                Send Email
              </button>
            </div>
          </form>
        </Modal>
        <Modal isOpen={isModalUploadOpen} onClose={() => setModalUploadOpen(false)} title="Upload">
          <form onSubmit={handleSubmit}>
            {/* Sender Email */}
               <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter name"
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mb-3">
                    <label className="form-label">Upload xls and .csv File</label>
                    <input
                      type="file"
                      name="file"
                      accept=".xls,.xlsx,.csv"
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Download link */}
                  <div className="mb-3">
                    <a href="/sample-format.csv" download>
                      Download Format
                    </a>
                  </div>


            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setModalEmailOpen(false)}>
                Close
              </button>
              <button type="submit" className="btn btn-warning">
                Send Email
              </button>
            </div>
          </form>
        </Modal>
        <Modal
        isOpen={isModalCommentOpen}
        onClose={() => setModalCommentOpen(false)}
        title="Customer List">

        <div className="row g-3">
          <div> 
            <table className="table table-bordered text-center">
                  <thead className="table-light">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((cust, index) => (
                      <tr key={index}>
                        <td>{cust.firstName}</td>
                        <td>{cust.lastName}</td>
                        <td>{cust.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
          </div>
        </div>
      </Modal>
      </main>
    </>
  )
}