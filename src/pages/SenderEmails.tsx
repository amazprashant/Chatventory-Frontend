import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";

export default function SenderEmails() {
  const [roleName, setRoleName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalCommentOpen, setModalCommentOpen] = useState(false);
  const [isModalImportOpen, setModalImportOpen] = useState(false);
  const [isModalEmailOpen, setModalEmailOpen] = useState(false);
  const [isModalAddTemplateOpen, setModalAddTemplateOpen] = useState(false);
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
              <h1>Sender Emails</h1>
              <Breadcrumb />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-end">
            <button
              className="btn btn-secondary"
              onClick={() => setModalOpen(true)}
            > Add Roles
            </button>
          </div>
        </div>

        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
            <div className="row mt-3">

              {/* Left Side */}
              <div className="col-md-6">
                <h4>Sender Emails</h4>
              </div>

              {/* Right Side */}
              <div className="col-md-6">
                <div className="d-flex gap-3 justify-content-end align-items-end flex-wrap">
                  <button
                    className="btn btn-warning d-flex align-items-center"
                    onClick={() => setModalEmailOpen(true)}>
                    Send Emails
                  </button>
                  <button
                    className="btn btn-warning d-flex align-items-center"
                    onClick={() => setModalAddTemplateOpen(true)}>
                    Add Templates
                  </button>
                </div>
              </div>
              </div>
              <div className="col-md-12">
                <div className="content px-0">
                  <table id="example" className="table nowrap table-bordered table-striped" >
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Template Name</th>
                        <th>Subject</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
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
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
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
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
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
        <Modal isOpen={isModalEmailOpen} onClose={() => setModalEmailOpen(false)} title="Send Email">
          <form onSubmit={handleSubmit}>
            {/* Sender Email */}
            <div className="mb-3">
              <label className="form-label">Senders Emails</label>
              <select
                className="form-select"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                required
              >
                <option value="">Select Senders Email</option>
                <option value="noreply@marketsai.com">noreply@marketsai.com</option>
                <option value="support@marketsai.com">support@marketsai.com</option>
              </select>
            </div>

            {/* Send To Options */}
            <div className="mb-3">
              <label className="form-label">Send to</label>
              <div className="d-flex flex-wrap gap-3">
                {[
                  "Mailing List",
                  "Customer Type",
                  "Individual",
                  "Email",
                  "Experience",
                  "Traded",
                  "Prospects",
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
              <label className="form-label">Prospects</label>
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

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label">Subject</label>
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

            {/* Body */}
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea
                className="form-control"
                name="body"
                rows={6}
                value={formData.body}
                onChange={handleChange}
                placeholder="Write your email content..."
              ></textarea>
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
        <Modal isOpen={isModalAddTemplateOpen} onClose={() => setModalAddTemplateOpen(false)} title="Send Email">
          <form onSubmit={handleSubmit}>
            {/* Sender Email */}
            <div className="mb-3">
              <label className="form-label">Add Templates</label>
              <select
                className="form-select"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                required
              >
                <option value="">Select Senders Email</option>
                <option value="noreply@marketsai.com">noreply@marketsai.com</option>
                <option value="support@marketsai.com">support@marketsai.com</option>
              </select>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label">Subject</label>
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

            {/* Body */}
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea
                className="form-control"
                name="body"
                rows={6}
                value={formData.body}
                onChange={handleChange}
                placeholder="Write your email content..."
              ></textarea>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setModalEmailOpen(false)}>
                Close
              </button>
              <button type="submit" className="btn btn-warning">
                Add Template
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  )
}