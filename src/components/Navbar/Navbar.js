import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="nav_left">
                    <div className="nav_logo">
                        <img src={logo} alt="" height={50} width={50} />
                    </div>
                   
                </div>
                <div className="nav_center">
                    <ul>
                        <li className='Home'><a href="/">Home</a></li>
                        <li className='Home'><a href="/">Features</a></li>
                        <li className='Home'><a href="/">Pricing</a></li>
                        <li className='Home'><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="nav_right">
                    <div className="nav_login">
                        <h3>Login</h3>
                    </div>
                    <div className="nav_signup">
                        <button>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar