import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";

class Contact extends React.Component{
    render() {
      return (
        <div>
          <title>Contact Us</title>
          <div className="container"> </div>



          <Navbar inverse collapseOnSelect>
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




          <h1>So what do you think?</h1>
          <p className="contactText">If you found any issue that needs to be fixed or have any ideas that could be added feel free to email us!</p>
          <form>
            <div className="form-group">
              <label className="input-email" htmlFor="exampleInputEmail1">Email address</label>
              <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input className="form-control subjectClass" type="text" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <img src="images/images (6).jpeg" className="img-fluids" alt="Responsive image" />
        </div>
      );
    }
  };


  export default Contact;