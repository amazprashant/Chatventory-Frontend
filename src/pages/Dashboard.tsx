import AppHeader from  "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";

export default function Dashboard(){
    return(
        <>
        <AppHeader />   
        <AppSidebar />
        <main id="main" className="main">

        <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="dashboard.php"><i className="bi bi-house-door"></i> Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>

        
        <section className="section dashboard">
            <div className="row g-4">

                
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm border-0 rounded-4 h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="icon-wrapper bg-primary text-white rounded-circle p-3 me-3">
                                <i className="bi bi-briefcase fs-4"></i>
                            </div>
                            <div>
                                <h6 className="mb-1 text-muted">Total Jobs</h6>
                                <h4 className="mb-0 fw-bold">512</h4>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm border-0 rounded-4 h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="icon-wrapper bg-warning text-white rounded-circle p-3 me-3">
                                <i className="bi bi-clock-history fs-4"></i>
                            </div>
                            <div>
                                <h6 className="mb-1 text-muted">Crane Time Today</h6>
                                <h4 className="mb-0 fw-bold">08:34 hrs</h4>
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm border-0 rounded-4 h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="icon-wrapper bg-success text-white rounded-circle p-3 me-3">
                                <i className="bi bi-activity fs-4"></i>
                            </div>
                            <div>
                                <h6 className="mb-1 text-muted">Active Jobs</h6>
                                <h4 className="mb-0 fw-bold">23</h4>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm border-0 rounded-4 h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="icon-wrapper bg-danger text-white rounded-circle p-3 me-3">
                                <i className="bi-building fs-4"></i>
                            </div>
                            <div>
                                <h6 className="mb-1 text-muted">Cranes On Site</h6>
                                <h4 className="mb-0 fw-bold">11</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </main>
    </>
    )
}