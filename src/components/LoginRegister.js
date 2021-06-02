import React from 'react';
import axios from "axios";
import './css/loginRegisterStyle.css'


class LoginRegister extends React.Component {

    state = {
        name:"",
        email:"",
        password:""
    }

    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }

    submit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('password',this.state.password)
        const user = {
            name: this.state.name,
            email: this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:8080/users/register', fd).then(res => {
            console.log(res);
            console.log(res.data)
        })
    }

    render() {

        return (
            <div className="mydivCover">
                <div className="container mt-5 " id="container">
                    <div className="form-container sign-up-container mt-2">
                        <form onSubmit={this.submit}>
                            <h1 className="font-weight-bold">Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                            </div>
                            <input type="text" placeholder="Name" value={this.state.name} onChange={e=> this.setState({name: e.target.value})}/>
                            <input type="email" placeholder="Email" value={this.state.email} onChange={e=> this.setState({email: e.target.value})}/>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={e=> this.setState({password: e.target.value})}/>
                            <button className="mybutton btn btn-info btn-rounded" type="submit">Sign up</button>
                        </form>
                    </div>

                    <div className="form-container sign-in-container mt-2">
                        <form action="#">
                            <h1 className="font-weight-bold">Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button className="mybutton btn btn-info btn-rounded">Sign In</button>
                        </form>
                    </div>

                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="font-weight-bold">Good to see you!</h1>
                                <p>You already have an account? <br/>Sign in!</p>
                                <button className="but" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="font-weight-bold">Hello, Friend!</h1>
                                <p>You don't have account yet? Don't worry! You still can join us</p>
                                <button className="but" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegister;
