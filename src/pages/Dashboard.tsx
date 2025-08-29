import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import DashboardCards from "../components/DashboardCards";
import Breadcrumb from "../components/Breadcrumb";



const stats = [
    { icon: "bi bi-briefcase fs-4", bgColor: "bg-primary", title: "Total Jobs", value: "512" },
    { icon: "bi bi-clock-history fs-4", bgColor: "bg-warning", title: "Crane Time Today", value: "08:34 hrs" },
    { icon: "bi bi-activity fs-4", bgColor: "bg-success", title: "Active Jobs", value: "23" },
    { icon: "bi bi-building fs-4", bgColor: "bg-danger", title: "Cranes On Site", value: "11" },
];
export default function Dashboard() {


    return (
        <>
            <AppHeader />
            <AppSidebar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <Breadcrumb />
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

            </main>
        </>
    )
}