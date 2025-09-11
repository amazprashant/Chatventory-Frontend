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
              <h1>Manage Roles</h1>
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
              <select
                className="form-select"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                required>
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
              <div className="col-md-12">
                <div className="content px-0">
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
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}