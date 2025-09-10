import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";


export default function Prospects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalCommentOpen, setModalCommentOpen] = useState(false);
  const [isModalImportOpen, setModalImportOpen] = useState(false);
  const [isModalEmailOpen, setModalEmailOpen] = useState(false);
  const [isModalUploadOpen, setModalUploadOpen] = useState(false);
  const [isModalAddMailingOpen, setModalAddMailingOpen] = useState(false);

  


  const [activeTab, setActiveTab] = useState("templates");

  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setModalEmailOpen(false); // close modal after submit
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
              <div>
                <button
                  className="btn btn-warning d-flex align-items-center"
                  onClick={() => setModalImportOpen(true)}> Import Prospects
                </button>
              </div>
              <button
                className="btn btn-warning d-flex align-items-center"
                onClick={() => setModalOpen(true)}> Add Prospects
              </button>
            </div>
          </div>
        </div>


        <section className="section">
          <div className="card recent-sales overflow-auto">
            <div className="card-body pt-3">
              <div className="container mt-4">
                {/* Tab Header */}
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "sender" ? "active" : ""}`}
                      onClick={() => setActiveTab("sender")}
                    >
                      Sender Emails
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "templates" ? "active" : ""}`}
                      onClick={() => setActiveTab("templates")}
                    >
                      Templates
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "mailing" ? "active" : ""}`}
                      onClick={() => setActiveTab("mailing")}
                    >
                      Mailing Lists
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "history" ? "active" : ""}`}
                      onClick={() => setActiveTab("history")}
                    >
                      History
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content mt-3">
                  {activeTab === "sender" && (
                    <div>
                      <button
                        className="btn btn-warning d-flex align-items-center"
                        onClick={() => setModalEmailOpen(true)}> Send Emails
                      </button>
                      <table id="example" className="table nowrap table-bordered table-striped" >
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#001</td>
                            <td>Client A</td>
                            <td>Client</td>
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
                            </td>
                            <td>
                              <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                              <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "templates" && (
                    <div>
                      <h4>Templates</h4>

                      {/* Example table like your screenshot */}
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <button className="btn btn-warning me-2">Send Custom Email</button>
                          <button className="btn btn-success">Add Template</button>
                        </div>
                        <input
                          type="text"
                          className="form-control w-25"
                          placeholder="Search..."
                        />
                      </div>

                      <table id="example" className="table nowrap table-bordered table-striped" >
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#001</td>
                            <td>Client A</td>
                            <td>Client</td>
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
                            </td>
                            <td>
                              <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                              <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "mailing" && (
                    <div>
                      <h4>Mailing Lists</h4>
                       <div>
                          <button
                          className="btn btn-warning d-flex align-items-center"
                          onClick={() => setModalUploadOpen(true)}>Upload</button>
                           <button
                          className="btn btn-warning d-flex align-items-center"
                          onClick={() => setModalAddMailingOpen(true)}>Add Mailing List</button>
                        </div>
                      <table id="example" className="table nowrap table-bordered table-striped" >
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#001</td>
                            <td>Client A</td>
                            <td>Client</td>
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
                            </td>
                            <td>
                              <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                              <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "history" && (
                    <div>
                      <h4>History</h4>
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
                      <table id="example" className="table nowrap table-bordered table-striped" >
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#001</td>
                            <td>Client A</td>
                            <td>Client</td>
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
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
                            <td>abc@gmail.com</td>
                            <td>
                              <a href='#' className='icon icon-sm icon-warning' onClick={() => setModalCommentOpen(true)} title='View'><i className='bi bi-eye-fill'></i></a>
                            </td>
                            <td>
                              <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                              <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Add Prospects">

          <div className="row g-3">
            <div>
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>

            <div>
              <label className="form-label">Comments</label>
              <input type="textarea" className="form-control" />
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isModalCommentOpen}
          onClose={() => setModalCommentOpen(false)}
          title="Comments">

          <div className="row g-3">
            <div>
              <label className="form-label">Comments</label>
            </div>
          </div>
        </Modal>

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
        <Modal
          isOpen={isModalUploadOpen}
          onClose={() => setModalUploadOpen(false)}
          title="Comments">

          <div className="row g-3">
            <table className="table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>prospects_list.csv</td>
                  <td>Uploaded</td>
                  <td>Test</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
        <Modal isOpen={isModalAddMailingOpen} onClose={() => setModalAddMailingOpen(false)} title="Send Email">
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
      </main>
    </>
  )
}