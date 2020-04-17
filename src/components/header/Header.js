import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container">
                    <span className="navbar-brand"><Link to="/">LOGO</Link></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <span className="nav-link"><NavLink to="/" activeClassName="active">Trang chủ</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"><NavLink to="/gioi-thieu" activeClassName="active">Giới thiệu</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"><NavLink to="/lien-he" activeClassName="active">Liên hệ</NavLink></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        );
    }
}

export default Header;