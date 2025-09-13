import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";


export default function Prospects() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalCommentOpen, setModalCommentOpen] = useState(false);
    const [isModalImportOpen, setModalImportOpen] = useState(false);
    
    return (
        <>
        <AppHeader />
        <AppSidebar />
        <main id="main" className="main">
        <div className="row mb-3 align-items-center">
          {/* Left side: Title + Breadcrumb */}
          <div className="col-sm-4">
            <div className="pagetitle">
              <h1>Prospects</h1>
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
            <textarea className="form-control" rows={6}/>
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

        <Modal
        isOpen={isModalImportOpen}
        onClose={() => setModalImportOpen(false)}
        title="Import File">

        <div className="row g-3">
          <div> 
            <label className="form-label">Import File</label>
            <input type="file" className="form-control" />
          </div>
          <div className="mb-3">
            <a href="/sample-format.csv" download>
              Download Format
            </a>
          </div>
        </div>
      </Modal>
    </main>
        </>
    )
}