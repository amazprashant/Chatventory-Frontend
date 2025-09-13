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
  const [isModalAddSenderEmailOpen, setModalAddSenderEmailOpen] = useState(false);
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
              onClick={() => setModalAddSenderEmailOpen(true)}
            > Add Sender Email
            </button>
          </div>
        </div>

        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="content px-0">
                  <table id="example" className="table nowrap table-bordered table-striped" >
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>User</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#001</td>
                        <td>Client</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>Client</td>
                        <td>
                          <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                          <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
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
        <Modal isOpen={isModalAddSenderEmailOpen} onClose={() => setModalAddSenderEmailOpen(false)} title="Add Sender Email">
          <form onSubmit={handleSubmit}>
            {/* Subject */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
              />
            </div>  
          </form>
        </Modal>
      </main>
    </>
  )
}