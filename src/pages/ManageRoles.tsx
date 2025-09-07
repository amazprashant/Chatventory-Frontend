import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";

export default function ManageRoles() {
    const [isModalOpen, setModalOpen] = useState(false);
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
                        >
                        <i className="bi bi-plus-circle me-1"></i> Add Roles
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
                                                <th>Role Name</th>
                                                <th>No.of people assigned to role</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td className='ft-secondary fw-600'></td>
                                                <td></td>
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
             <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Add New Role"
        >
          <form className="row g-3">
            <div className="col-12">
              <label className="form-label">Role Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
                required
              />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-success">
                <i className="bi bi-check-circle me-1"></i> Save
              </button>
            </div>
          </form>
        </Modal>

            </main>
        </>
    )
}