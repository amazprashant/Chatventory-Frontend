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
                  Type
                </label>
                  <select className="form-select" name="role" required>
                  <option value="">Select Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>

              {/* To Date */}
              <div>
                <label htmlFor="status" className="form-label">
                  Experience
                </label>
                  <select className="form-select" name="role" required>
                  <option value="">Select Experience</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className="form-label">
                  Traded
                </label>
                  <select className="form-select" name="role" required>
                  <option value="">Select Traded</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>
                <button
                  className="btn btn-warning d-flex align-items-center"
                  onClick={() => setModalOpen(true)}> Clear Filter
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
                                <th>Customer No</th>
                                <th>Email</th>
                                <th>Subscription</th>
                                <th>Experience</th>
                                <th>Traded</th>
                                <th>Expiration Date</th>
                                <th>Signup Date</th>
                                <th>Last Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#001</td>
                                <td>Client A</td>
                                <td>Operator X</td>
                                <td>Mumbai Port</td>
                                <td>2024-05-01 10:00</td>
                                <td>2024-05-01 18:00</td>
                                <td>Crane-7</td>
                                <td>Urgent Job</td>
                                <td>
                                    2024-05-01 10:00
                                </td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td>Client B</td>
                                <td>Operator Y</td>
                                <td>Chennai Port</td>
                                <td>2024-05-02 09:00</td>
                                <td>2024-05-02 17:30</td>
                                <td>Crane-3</td>
                                <td>Regular Maintenance</td>
                                <td>
                                    2024-05-01 09:00
                                </td>
                            </tr>
                            <tr>
                                <td>#003</td>
                                <td>Client C</td>
                                <td>Operator Z</td>
                                <td>Kolkata Dock</td>
                                <td>2024-05-03 12:00</td>
                                <td>2024-05-03 20:00</td>
                                <td>Crane-1</td>
                                <td>Heavy Container Shift</td>
                                <td>
                                    2024-05-01 09:00
                                </td>
                            </tr>
                            <tr>
                                <td>#004</td>
                                <td>Client D</td>
                                <td>Operator Rajiv Gangwar</td>
                                <td>Nhava Sheva</td>
                                <td>2024-05-04 08:30</td>
                                <td>2024-05-04 16:30</td>
                                <td>Crane-5</td>
                                <td>VIP Cargo Handling</td>
                                <td>
                                    2024-05-01 09:00
                                </td>
                            </tr>
                            <tr>
                                <td>#005</td>
                                <td>Client E</td>
                                <td>Operator A1</td>
                                <td>Vizag Terminal</td>
                                <td>2024-05-05 11:00</td>
                                <td>2024-05-05 19:00</td>
                                <td>Crane-9</td>
                                <td>Weather Delay Buffer</td>
                                <td>
                                    2024-05-01 09:00
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