import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";

export default function History() {
  const [roleName, setRoleName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalCommentOpen, setModalCommentOpen] = useState(false);
  const [isModalImportOpen, setModalImportOpen] = useState(false);
  const [isModalEmailOpen, setModalEmailOpen] = useState(false);
  const [isModalUploadOpen, setModalUploadOpen] = useState(false);
  const [isModalAddTemplateOpen, setModalAddTemplateOpen] = useState(false);
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
    templateType: "",
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
              <h1>History</h1>
              <Breadcrumb />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-end">

          </div>
        </div>

        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <div className="row mt-3 align-items-center">
                {/* Left Side */}
                <div className="col-md-4">
                  {/* <h4>History</h4> */}
                </div>

                {/* Right Side */}
                <div className="col-md-6">
                  <div className="d-flex gap-3 text-end">
                    {/* Sender Email Dropdown */}
                    <select
                      className="form-select"
                      name="senderEmail"
                      value={formData.senderEmail}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Sender Email</option>
                      <option value="noreply@marketsai.com">noreply@marketsai.com</option>
                      <option value="support@marketsai.com">support@marketsai.com</option>
                    </select>

                    {/* Template Type Dropdown */}
                    <select
                      className="form-select"
                      name="templateType"
                      value={formData.templateType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Template Type</option>
                      <option value="marketing">Marketing</option>
                      <option value="transactional">Transactional</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>

                {/* Button */}
                <div className="col-md-2 text-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => setModalOpen(true)}
                  >
                    Clear Filter
                  </button>
                </div>
              </div>


              <div className="col-md-12">
                <div className="content px-0">
                  <table id="example" className="table nowrap table-bordered table-striped" >
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Recipent Name</th>
                        <th>Type</th>
                        <th>Email Template</th>
                        <th>Sender Email</th>
                        <th>Mailing List</th>
                        <th>Send Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Send' onClick={() => setModalAddTemplateOpen(true)}><i className='bi bi-send'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Send' onClick={() => setModalAddTemplateOpen(true)}><i className='bi bi-send'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Send' onClick={() => setModalAddTemplateOpen(true)}><i className='bi bi-send'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Send' onClick={() => setModalAddTemplateOpen(true)}><i className='bi bi-send'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client A</td>
                        <td>Client</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>abc@gmail.com</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Send' onClick={() => setModalAddTemplateOpen(true)}><i className='bi bi-send'></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
              <Modal isOpen={isModalAddTemplateOpen} onClose={() => setModalAddTemplateOpen(false)} title="Add Templates">
          <form onSubmit={handleSubmit}>
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
          </form>
        </Modal>
      </main>
    </>
  )
}