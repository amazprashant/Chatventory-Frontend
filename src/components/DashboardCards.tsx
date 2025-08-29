interface DashboardCardsProps {
  icon: string;     // className for Bootstrap icon
  bgColor: string;  // className for background color
  title: string;    // small text
  value: string;    // main value (could also be number if you want)
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ icon, bgColor, title, value }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="card shadow-sm border-0 rounded-4 h-100">
        <div className="card-body d-flex align-items-center">
          <div className={`icon-wrapper ${bgColor} text-white rounded-circle p-3 me-3`}>
            <i className={`${icon} fs-4`}></i>
          </div>
          <div>
            <h6 className="mb-1 text-muted">{title}</h6>
            <h4 className="mb-0 fw-bold">{value}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
