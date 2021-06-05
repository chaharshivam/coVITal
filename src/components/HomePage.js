import React from "react";
import {Link} from "react-router-dom";

import './css/homepageStyle.css';

class HomePage extends React.Component{

    render(){
        return(
            <div className="mydiv d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h1 className="float-md-start mb-0">coVITal</h1>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/features" className="nav-link" >Features</Link>
                            <Link to="/login" className="nav-link" >Login</Link>
                            <Link to="/register" className="nav-link" >Signup</Link>
                        </nav>
                    </div>
                </header>
                <main className="px-3">
                    <h1>Welcome to coVITal</h1>
                    <p className="lead">coVITal is a web-based application for COVID-19 testing through the cough sounds using machine learning. The application is made with the objective of providing the testing at home hence reducing the need and the risk of going for the in-person testing. </p>
                    <p className="lead">The Application predicts COVID-19 with 81.25% accuracy</p>
                    <p className="lead">
                        <Link to="/register" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Test now</Link>
                    </p>
                </main>
                <footer className="mt-auto text-white-50">
                    <p>&#169; 2021 coVITal, Made with &#9825; by Shivam</p>
                </footer>
            </div>
            </div>
        )
    }
}

export default HomePage;
