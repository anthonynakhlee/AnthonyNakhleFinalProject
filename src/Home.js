import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import "./index.css";


class Home extends React.Component{
    render() {
      return (
        <div>
          <title>Home</title>
          <div className="container">
          </div>
          <Navbar inverse collapseOnSelect id="navbar-expand-lg">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                  <NavDropdown eventKey={3} title="Stories" id="basic-nav-dropdown">
                <MenuItem href = "/creepy" eventKey={3.1}> Creepypasta </MenuItem>
                <MenuItem href = "/urban" eventKey={3.2}>Urban Legends</MenuItem>
                <MenuItem href = "/paranormal" eventKey={3.3}>Paranormal Stories</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="/add">
                Add A Story
              </NavItem>
              <NavItem eventKey={1} href="/contact">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;

          <div className="jumbotron">
            <h1 className="display-4">Welcome To The World Of <span className="blood"> Horror Stories </span> </h1>
            <p className="lead">Our purpose is to make sure every horror story lover gets the chills he expects when reading something scary.</p>
            <p className="leads">Everyone deserves to take a break from life, venture into our stories and get that spooky feeling you deserve!</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/creepy" role="button">Start Reading</a>
            </p>
          </div>
        </div>
      );
    }
  }

  export default Home;