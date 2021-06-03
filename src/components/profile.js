import React from 'react';
import "./css/profileStyle.css";

class Profile extends React.Component {
    render() {
        return (
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Profile</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span><h3>Profile Picture</h3></span>
                        </h4>
                        <img src="..." alt="..." className="img-thumbnail"/>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                           required/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                           required/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text py-0">@</span>
                                        <input type="text" className="form-control mt-0 mb-0" id="username" placeholder="Username"
                                               required/>
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="you@example.com"/>
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Password </label>
                                    <input type="password" className="form-control" id="address2"
                                           placeholder="Password"/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address <span
                                        className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                           />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control mt-0" id="zip" placeholder="" required/>
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                </div>
                            </div>
                                        <button className="w-100 btn btn-primary btn-lg mt-3" type="submit">Update Profile
                                        </button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default Profile;
