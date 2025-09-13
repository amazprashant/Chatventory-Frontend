import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";
import Modal from "../components/RolesModal";


export default function Customers() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppHeader />
      <AppSidebar />
      <main id="main" className="main">
        <div className="row mb-3 align-items-center">
          {/* Left side: Title + Breadcrumb */}
          <div className="col-sm-4">
            <div className="pagetitle">
              <h1>Customer</h1>
              <Breadcrumb />
            </div>
          </div>

          {/* Right side: Filters + Add User */}
          <div className="col-sm-8">
            <div className="d-flex gap-3 justify-content-end align-items-end flex-wrap">
              {/* From Date */}
              <div>
                <label htmlFor="role_name" className="form-label">
                  Type
                </label>
                <select className="form-select" name="role" required>
                  <option value="">Select Type</option>
                  <option value="basic">Basic</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              {/* To Date */}
              <div>
                <label htmlFor="status" className="form-label">
                  Experience
                </label>
                <select className="form-select" name="role" required>
                  <option value="">Select Experience</option>
                  <option value="">Select Experience</option>
                  <option value="Twitter Trade Sentiment" >Twitter Trade Sentiment</option>
                  <option value="AI Stock News Analysis" >AI Stock News Analysis</option>
                  <option value="AI Analysts Predictions" >AI Analysts Predictions </option>
                  <option value="AI Earnings Estimates" >AI Earnings Estimates</option>
                  <option value="Community Top Ten Stock Picks" >Community Top Ten Stock Picks</option>
                  <option value="Market Movers">Market Movers</option>
                  <option value="Chatbot Stock Assistant">Chatbot Stock Assistant</option>
                  <option value="Charts and Data">Charts and Data</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className="form-label">
                  Traded
                </label>
                <select className="form-select" name="role" required>
                  <option value="">Select Traded</option>
                  <option value="Stocks">Stocks</option>
                  <option value="ETFs"> ETFs</option>
                  <option value="Crypto">Crypto </option>
                  <option value="Fantasy Sports">Fantasy Sports</option>
                  <option value="Options">Options </option>
                  <option value="Sports betting" >Sports betting</option>
                </select>
              </div>
              <button
                className="btn btn-warning d-flex align-items-center"> Clear Filter
              </button>
            </div>
          </div>
        </div>


        <section className="section">
          <div className="card recent-sales overflow-auto">
            <div className="card-body pt-3">

              <table
                id="example"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Customer No</th>
                    <th>Email</th>
                    <th>Subscription</th>
                    <th>Experience</th>
                    <th>Traded</th>
                    <th>Signup Date</th>
                    <th>Last Activity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>CUST001</td>
                    <td>clientA@example.com</td>
                    <td>Premium</td>
                    <td>5 years</td>
                    <td>Yes</td>
                    <td>2024-05-01 10:00</td>
                    <td>2024-05-01 18:00</td>
                    <td>
                      <button
                        className="icon icon-sm icon-primary"
                        title="Edit"
                        onClick={() => setModalOpen(true)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <a
                        href="#"
                        className="icon icon-sm icon-danger"
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#002</td>
                    <td>CUST002</td>
                    <td>clientB@example.com</td>
                    <td>Standard</td>
                    <td>3 years</td>
                    <td>No</td>
                    <td>2024-05-02 09:00</td>
                    <td>2024-05-02 17:30</td>
                    <td>
                      <button
                        className="icon icon-sm icon-primary"
                        title="Edit"
                        onClick={() => setModalOpen(true)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <a
                        href="#"
                        className="icon icon-sm icon-danger"
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#003</td>
                    <td>CUST003</td>
                    <td>clientC@example.com</td>
                    <td>Basic</td>
                    <td>1 year</td>
                    <td>Yes</td>
                    <td>2024-05-03 12:00</td>
                    <td>2024-05-03 20:00</td>
                    <td>
                      <button
                        className="icon icon-sm icon-primary"
                        title="Edit"
                        onClick={() => setModalOpen(true)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <a
                        href="#"
                        className="icon icon-sm icon-danger"
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#004</td>
                    <td>CUST004</td>
                    <td>clientD@example.com</td>
                    <td>Enterprise</td>
                    <td>7 years</td>
                    <td>Yes</td>
                    <td>2024-05-04 08:30</td>
                    <td>2024-05-04 16:30</td>
                    <td>
                      <button
                        className="icon icon-sm icon-primary"
                        title="Edit"
                        onClick={() => setModalOpen(true)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <a
                        href="#"
                        className="icon icon-sm icon-danger"
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#005</td>
                    <td>CUST005</td>
                    <td>clientE@example.com</td>
                    <td>Premium</td>
                    <td>2 years</td>
                    <td>No</td>
                    <td>2024-05-05 11:00</td>
                    <td>2024-05-05 19:00</td>
                    <td>
                      <button
                        className="icon icon-sm icon-primary"
                        title="Edit"
                        onClick={() => setModalOpen(true)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <a
                        href="#"
                        className="icon icon-sm icon-danger"
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </a>
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
          title="Edit Customer">

          <div className="row g-3">
            <div>
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" defaultValue="Nick" />
            </div>

            <div>
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" defaultValue="Vasiliou" />
            </div>

            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" defaultValue="saenickb@gmail.com" />
            </div>

            <div>
              <label className="form-label">Subscription</label>
              <select className="form-control">
                <option>Basic</option>
                <option>Premium</option>
              </select>
            </div>

            <div>
              <label className="form-label">Experience</label>
              <select className="form-control">
                <option>Select an Option</option>
                <option>Beginner</option>
                <option>Expert</option>
              </select>
            </div>

            <div>
              <label className="form-label">Traded</label>
              <select className="form-control">
                <option>Select an Option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="form-label">Acknowledged Terms of Use</label>
              <select className="form-control">
                <option>Select Acknowledge</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </Modal>

      </main>
    </>
  )
}