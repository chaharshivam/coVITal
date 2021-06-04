import React from 'react';
import defaultProfileImage from './assets/ProfileImage/img.png';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/profileStyle.css";

class Profile extends React.Component {

    state = {
        profilePicturePath: null,
        profilePictureName: "",
        selectedFile: null,
        changePictureOnSelect: null,
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        address: "",
        country: "",
        state: "",
        zip: "",
        updatedStatus: false,
        accountCreatedOn:""
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users/getUser', {withCredentials: true}).then(res => {
            console.log("this is the response of getUser");
            console.log(res);
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                userName:res.data.userName,
                email: res.data.email,
                profilePicturePath: res.data.profilePicturePath,
                address: res.data.address,
                country: res.data.country,
                state: res.data.state,
                zip: res.data.zip,
                accountCreatedOn:res.data.accountCreatedOn
            })
        }).catch(error => console.log(error.message));

    }

    setImage() {
        if (this.state.profilePicturePath === null)
            return defaultProfileImage
        else
            return `http://localhost:8080/${this.state.profilePicturePath}`
    }

    fileSelectedHandler = event => {
        console.log(event.target.files);
        console.log(URL.createObjectURL(event.target.files[0]));
        this.setState({
            profilePictureName: event.target.files[0].name, selectedFile: event.target.files[0],
            changePictureOnSelect: URL.createObjectURL(event.target.files[0])
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        if (this.state.selectedFile !== null)
            fd.append('profilePicture', this.state.selectedFile, this.state.selectedFile.name);
        else
            fd.append('profilePicture', this.state.profilePictureName)
        fd.append('firstName', this.state.firstName);
        fd.append('lastName', this.state.lastName);
        fd.append('userName',this.state.userName);
        fd.append('email', this.state.email);
        fd.append('address', this.state.address);
        fd.append('country', this.state.country);
        fd.append('state', this.state.state);
        fd.append('zip', this.state.zip)
        axios.put('http://localhost:8080/users/modify', fd)
            .then(res => {
                this.setState({updateStatus: true});
                toast.success('Profile Updated Successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }).catch(e => {
            console.log(e);
        })
    }


    render() {
        return (
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Profile</h1>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h3 className="d-inline-flex justify-content-between align-items-center mb-3">
                                <span>Profile Picture</span>
                            </h3>
                            <img src={this.state.changePictureOnSelect || this.setImage()} height="300" width="300"
                                 alt="..." className="d-flex img-thumbnail"/>
                            <div className="input-group">
                                <label className="input-group-btn">
                                     <span className="btn btn-primary">
                                      Browse File <input type="file" style={{display: "none"}}
                                                         onChange={this.fileSelectedHandler}/>
                                    </span>
                                </label>
                                <input type="text" className="form-control mb-0 mt-0"
                                       value={this.state.profilePictureName} readOnly/>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=""
                                           value={this.state.firstName}
                                           onChange={e => {
                                               this.setState({firstName: e.target.value})
                                           }}
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""
                                           value={this.state.lastName}
                                           onChange={e => {
                                               this.setState({lastName: e.target.value})
                                           }}
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text py-0">@</span>
                                        <input type="text" className="form-control mt-0 mb-0" id="username"
                                               placeholder="Username" value={this.state.userName} onChange={e=>{this.setState({userName: e.target.value})}}
                                               required/>
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="you@example.com" value={this.state.email}
                                           onChange={e => {
                                               this.setState({email: e.target.value})
                                           }}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="accountCreatedON" className="form-label">Account Created On </label>
                                    <input type="text" className="form-control" id="password"
                                           placeholder="Date" value={this.state.accountCreatedOn} readOnly/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address <span
                                        className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                           value={this.state.address}
                                           onChange={e => {
                                               this.setState({address: e.target.value})
                                           }}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input className="form-select" id="country" value={this.state.country} onChange={e=>{this.setState({country: e.target.value})}}>
                                    </input>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input className="form-select" id="state" value={this.state.state} onChange={e=>{this.setState({state: e.target.value})}} required>

                                    </input>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control mt-0" id="zip" placeholder=""
                                           value={this.state.zip}
                                           onChange={e => {
                                               this.setState({zip: e.target.value})
                                           }} required/>
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <button className="w-100 btn btn-primary btn-lg mt-3" type="submit">Update Profile
                            </button>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </form>
            </main>
        )
    }
}

export default Profile;
