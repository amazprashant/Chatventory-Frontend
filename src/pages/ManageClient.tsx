import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
export default  function ManageClient(){
    return (
        <>
        <AppHeader />
        <AppSidebar />
        <main id="main" className="main">
        <div className="row mb-3 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pagetitle">
                    <h1>Manage Clients</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard.php"><i className="bi bi-house-door"></i> Home</a></li>
                            <li className="breadcrumb-item active">Clients</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <a href="#" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
                    <i className="bi bi-plus-circle me-1"></i> Add Client
                </a>
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
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>    
                                <td></td>
                                <td className='ft-secondary fw-600'></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                <div className="modal fade" id="addClientModal"  aria-labelledby="addClientModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addClientModalLabel">Add New Client</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body row g-3">
                                <div className="col-12">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Client Name" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" placeholder="+91 9876543210" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="email@example.com" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Location</label>
                                    <input type="text" className="form-control" placeholder="City, Country" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success"><i className="bi bi-check-circle me-1"></i> Save</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="bi bi-x-circle me-1"></i> Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </main>
        </>
    )
}