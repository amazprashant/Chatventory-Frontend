import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";

export default  function ManageOperator(){
return (
    <>  
    <AppHeader />
    <AppSidebar />
    <main id="main" className="main">
        <div className="row mb-3 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pagetitle">
                    <h1>Manage Operators</h1>
                    <Breadcrumb />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addOperatorModal">
                    <i className="bi bi-person-plus me-1"></i> Add Operator
                </a>
            </div>
        </div>

        <div className="card recent-sales overflow-auto">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content px-0">
                            <table id="example" className="table table-bordered table-striped nowrap" >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Mobile</th>
                                        <th>Assigned Crane</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#001</td>
                                        <td>John Doe</td>
                                        <td>9876543210</td>
                                        <td>Crane A</td>
                                        <td>johndoe@craneboard.com</td>
                                        <td>
                                            <a href='#' className='icon icon-sm icon-secondary' title='View'><i className='bi bi-eye-fill'></i></a>
                                            <a href='#' className='icon icon-sm icon-primary' title='Edit'><i className='bi bi-pencil-fill'></i></a>
                                            <a href='#' className='icon icon-sm icon-danger' title='Delete'><i className='bi bi-trash-fill'></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#002</td>
                                        <td>Jane Smith</td>
                                        <td>9123456789</td>
                                        <td>Crane B</td>
                                        <td>janesmith@craneboard.com</td>
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

    </main>

    <div className="modal fade" id="addOperatorModal" aria-labelledby="addOperatorModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <form className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addOperatorModalLabel">Add New Operator</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter full name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder="Enter mobile number" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Assigned Crane</label>
                        <input type="text" className="form-control" placeholder="Enter crane name or ID" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Login Email</label>
                        <input type="email" className="form-control" placeholder="Enter email address" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" required />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-success"><i className="bi bi-check-circle me-1"></i> Save Operator</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="bi bi-x-circle me-1"></i> Cancel</button>
                </div>
            </form>
        </div>
    </div>
    </>
)
}