import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-6 text-center">
                            <h1 className="fw-light">DIAMOND JEWELERY</h1>
                        </div>
                    </div>
                </div>
            </header>


        );
    }
}

export default Header;