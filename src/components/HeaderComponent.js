import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className="pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Deep Rock</h1>
                                <h2>Café</h2>
                            </div>
                        </div>
                    </div>

                    <Navbar expand="sm">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem active>
                                        <NavLink className="nav-link" to="/home">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/about">
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contact">
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/order">
                                            Order
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>

                    <div className="container">
                        <nav className="navbar navbar-expand-sm navbar-dark justify-content-center pb-0">
                            <NavbarToggler onClick={this.toggleNav} />
                            <div isOpen={this.state.isNavOpen} className="collapse navbar-collapse" id="drNavbar">
                                <ul className="nav navbar-collapse">
                                    <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="menu.html">Menu</a></li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                    <li className="nav-item"><a className="nav-link" href="order.html">Order</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </Jumbotron>

                    
            </React.Fragment>
        )
    }
}

export default Header;