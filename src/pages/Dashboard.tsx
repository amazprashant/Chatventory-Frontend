import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import DashboardCards from "../components/DashboardCards";
import Breadcrumb from "../components/Breadcrumb";
import BarGraph from "../components/BarGraph";


const stats = [
    { icon: "bi bi-briefcase fs-4", bgColor: "bg-primary", title: "No. of Customer", value: "512" },
    { icon: "bi bi-clock-history fs-4", bgColor: "bg-warning", title: "Total Customer Logged In", value: "08:34 hrs" },
    { icon: "bi bi-activity fs-4", bgColor: "bg-success", title: "Total Email Sent", value: "23" },
    { icon: "bi bi-building fs-4", bgColor: "bg-danger", title: "Bounce %", value: "11" },
    { icon: "bi bi-briefcase fs-4", bgColor: "bg-primary", title: "Click % ", value: "512" },
    { icon: "bi bi-clock-history fs-4", bgColor: "bg-warning", title: "Open %", value: "08:34 hrs" },
];
export default function Dashboard() {


    return (
        <>
            <AppHeader />
            <AppSidebar />
            <main id="main" className="main">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="pagetitle">
                        <h1>Dashboard</h1>
                        <Breadcrumb />
                    </div>
                    <div className="d-flex gap-3">   
                        <div>
                            <label>From Date</label>
                            <input type="date" id="fromDate" className="form-control"/>
                        </div>
                        <div>
                            <label>To Date</label>
                            <input type="date" id="toDate" className="form-control"/>
                        </div>
                    </div>
                </div>

                <section className="section dashboard">
                    <div className="row g-4">

                        {stats.map((stat, index) => (
                            <DashboardCards
                                key={index}
                                icon={stat.icon}
                                bgColor={stat.bgColor}
                                title={stat.title}
                                value={stat.value}
                            />
                        ))}
                    </div>
                </section>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                        <BarGraph />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                        <BarGraph />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BarGraph/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                        <BarGraph />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                        <BarGraph />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BarGraph/>
                    </div>
                </div>
            </main>
        </>
    )
}