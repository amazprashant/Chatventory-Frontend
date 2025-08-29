import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function EditProfile(){
    return (
        <>
        <AppHeader />
        <AppSidebar />
        <main id="main" className="main">

    <div className="pagetitle">
      <h1>Settings</h1>
      <Breadcrumb />
    </div>

    <section className="section profile">
      <div className="row">
    
        <div className="col-xl-8">

          <div className="card">
            <div className="card-body pt-3">
              <ul className="nav nav-tabs nav-tabs-bordered">

                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                </li>

              </ul>
              <div className="tab-content pt-2">

                <div className="tab-pane fade show active profile-overview" id="profile-overview">

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">Rajiv Gangwar</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Company</div>
                    <div className="col-lg-9 col-md-8">CraneBoard</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">office@impahq.org</div>
                  </div>

                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                  
                  <form>
                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">

                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img src="assets/img/profile-img.png" alt="user-avatar" className="d-block rounded" height="100" width="100" id="uploadedAvatar"/>
                          <div className="button-wrapper">
                            <label className="btn btn-sm btn-success m-0 me-2 text-white" >
                              <span className="d-none d-sm-block">Upload new photo</span>
                              <input type="file" id="upload" className="account-file-input" accept="image/png, image/jpeg"/>
                            </label>
                            <button type="button" className="btn btn-sm btn-outline-secondary account-image-reset">
                              <span className="d-none d-sm-block">Reset</span>
                            </button>
                            <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value="Rajiv Gangwar" />
                      </div>
                    </div>


                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">Company</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="company" value="CraneBoard"/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 col-lg-3"></div>
                      <div className="col-md-4 col-lg-9 text-left">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>

                <div className="tab-pane fade pt-3" id="profile-settings">

                  <form>

                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="changesMade" checked />
                          <label className="form-check-label">
                            Changes made to your account
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newProducts" checked/>
                          <label className="form-check-label">
                            Information on new products and services
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="proOffers"/>
                          <label className="form-check-label">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                          <label className="form-check-label">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>

                </div>

                <div className="tab-pane fade pt-3" id="profile-change-password">
                 
                  <form>

                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label  className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword"/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 col-lg-3"></div>
                      <div className="col-md-4 col-lg-9 text-left">
                        <button type="submit" className="btn btn-primary">Change Password</button>
                      </div>
                    </div>
                  </form>

                </div>

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