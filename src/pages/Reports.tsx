import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function Reports(){
    return(
        <>
        <AppHeader />
        <AppSidebar />
        <main id="main" className="main">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="pagetitle">
                    <h1>View Reports</h1>
                    <Breadcrumb />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
                <select className="form-select" aria-label="Select Time Period">
                    <option >Select Time Period</option>
                    <option value="1">Day</option>
                    <option value="2">Week</option>
                    <option value="3">Month</option>
                </select>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
                <select className="form-select" aria-label="Select Client or Operator">
                    <option >Select Operator/Client</option>
                    <option value="1">Operator A</option>
                    <option value="2">Operator B</option>
                    <option value="3">Client A</option>
                    <option value="4">Client B</option>
                </select>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 text-end">
                <button className="btn btn-success">
                    <i className="bi bi-download mr-2"></i><span>Download Report</span>
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
                                        <th>Date</th>
                                        <th>Timestamp</th>
                                        <th>Operator</th>
                                        <th>Client</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#001</td>
                                        <td className="ft-secondary fw-600">05-03-2024</td>
                                        <td>17:12 pm</td>
                                        <td>Operator A</td>
                                        <td>Client A</td>
                                        <td>Mumbai Port</td>
                                        <td>
                                            <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" data-bs-toggle="tooltip" data-bs-placement="right" title="View Report"></i></a>
                                            <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-download" data-bs-toggle="tooltip" data-bs-placement="right" title="Download Report"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#002</td>
                                        <td className="ft-secondary fw-600">06-03-2024</td>
                                        <td>10:30 am</td>
                                        <td>Operator B</td>
                                        <td>Client B</td>
                                        <td>Chennai Port</td>
                                        <td>
                                            <a href="#" className="icon icon-sm icon-secondary"><i className="bi bi-eye-fill" data-bs-toggle="tooltip" data-bs-placement="right" title="View Report"></i></a>
                                            <a href="#" className="icon icon-sm icon-primary"><i className="bi bi-download" data-bs-toggle="tooltip" data-bs-placement="right" title="Download Report"></i></a>
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