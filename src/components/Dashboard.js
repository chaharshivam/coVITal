import React from 'react';
import AudioRecord from "./AudioRecord";
import Profile from "./profile";
import './css/dashboard.css'

class Dashboard extends React.Component{
    state={
        page:"dashboard",
        dashboardPage:"nav-link active myelement",
        reportsPage: "nav-link myelement",
        profilePage:"nav-link myelement"
    }

    onPageChange=()=>{
        if(this.state.page === "dashboard")
            return(
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"/>
                                This week
                            </button>
                        </div>
                    </div>
                    <AudioRecord/>
                    <canvas className="my-4 w-100" id="myChart" width="900" height="380"/>
                </main>
            )
        if(this.state.page === "profile")
            return <Profile/>
    }

    render(){
        return(
            <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-5" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                       aria-label="Search"/>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
            </header>
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column mt-4">
                            <li className="nav-item">
                                <a className={`${this.state.dashboardPage}`} aria-current="page" href="#" onClick={e=>{this.setState({page: "dashboard", reportsPage: "nav-link myelement", dashboardPage: "nav-link active myelement", profilePage: "nav-link myelement"})}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-home mysvg">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9 22 9 12 15 12 15 22"/>
                                    </svg>
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${this.state.reportsPage}`} href="#" onClick={e=>{this.setState({page: "report", reportsPage: "nav-link active myelement", dashboardPage: "nav-link myelement", profilePage: "nav-link myelement"})}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-bar-chart-2">
                                        <line x1="18" y1="20" x2="18" y2="10"/>
                                        <line x1="12" y1="20" x2="12" y2="4"/>
                                        <line x1="6" y1="20" x2="6" y2="14"/>
                                    </svg>
                                    Reports
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${this.state.profilePage}`} href="#" onClick={e=>{this.setState({page: "profile", reportsPage: "nav-link myelement", dashboardPage: "nav-link myelement", profilePage: "nav-link active myelement"})}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-users">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.onPageChange()}
            </div>
        </div>
            </div>
    );
    }
}

export default Dashboard
