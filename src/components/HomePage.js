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
                        <h3 className="float-md-start mb-0">coVITal</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/features" className="nav-link" >Features</Link>
                            <Link to="/contact" className="nav-link" >Contact</Link>
                            <Link to="/login" className="nav-link" >Login</Link>
                            <Link to="/register" className="nav-link" >Signup</Link>
                        </nav>
                    </div>
                </header>
                <main className="px-3">
                    <h1>Welcome to coVITal</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Test now</a>
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
