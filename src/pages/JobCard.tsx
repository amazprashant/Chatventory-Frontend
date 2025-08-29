import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function JobCard() {
    return (
        <>
        <AppHeader />
        <AppSidebar />
        <main id="main" className="main">
        <div className="row mb-3 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pagetitle">
                    <h1>Job Cards</h1>
                    <Breadcrumb/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#createJobCardModal">
                    <i className="bi bi-plus-circle me-1"></i> Create Job Card
                </button>
            </div>
        </div>


        <section className="section">
            <div className="card recent-sales overflow-auto">
                <div className="card-body pt-3">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <input type="date" className="form-control" placeholder="Filter by Date" />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option selected disabled>Filter by Client</option>
                                <option>Client A</option>
                                <option>Client B</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option selected disabled>Filter by Operator</option>
                                <option>Operator X</option>
                                <option>Operator Y</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-secondary w-100"><i className="bi bi-funnel"></i> Apply Filter</button>
                        </div>
                    </div>

                    <table id="example" className="table nowrap table-bordered table-striped" >
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Client</th>
                                <th>Operator</th>
                                <th>Location</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Crane</th>
                                <th>Notes</th>
                                <th>Action</th>
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
                                    <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" data-bs-toggle="tooltip" title="View Job"></i></a>
                                    <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-pencil" data-bs-toggle="tooltip" title="Edit Job"></i></a>
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
                                    <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" title="View Job"></i></a>
                                    <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-pencil" title="Edit Job"></i></a>
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
                                    <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" title="View Job"></i></a>
                                    <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-pencil" title="Edit Job"></i></a>
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
                                    <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" title="View Job"></i></a>
                                    <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-pencil" title="Edit Job"></i></a>
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
                                    <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" title="View Job"></i></a>
                                    <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-pencil" title="Edit Job"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>

        <div className="modal fade" id="createJobCardModal"  aria-labelledby="createJobCardLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <form action="jobcard-submit.php" method="POST">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createJobCardLabel">Create Job Card</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label className="form-label">Client</label>
                                    <select className="form-select" name="client" required>
                                        <option selected disabled>Select Client</option>
                                        <option value="Client A">Client A</option>
                                        <option value="Client B">Client B</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Operator</label>
                                    <select className="form-select" name="operator" required>
                                        <option selected disabled>Select Operator</option>
                                        <option value="Operator X">Operator X</option>
                                        <option value="Operator Y">Operator Y</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Job Location</label>
                                    <input type="text" className="form-control" name="location" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Crane Used</label>
                                    <input type="text" className="form-control" name="crane" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Start Date & Time</label>
                                    <input type="datetime-local" className="form-control" name="start_time" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">End Date & Time</label>
                                    <input type="datetime-local" className="form-control" name="end_time" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Notes</label>
                                    <textarea className="form-control" name="notes" ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success">
                                <i className="bi bi-check-circle"></i> Save Job Card
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                <i className="bi bi-x-circle"></i> Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main>
        </>
    )
}