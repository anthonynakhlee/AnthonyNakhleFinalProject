import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";


export default class AdminStoryList extends React.Component {
  renderOneStory = ({ image, title, text, approved }) => {
    const buttonText = approved ? "disapprove" : "approve";
    return (
      <div>
        <button onClick={() => this.props.approveToggle(title)}>
          {buttonText}
        </button>
        {image ? <img alt={title} src={image} /> : false}
        <h4>{title}</h4>
        <p>{text}</p>
        <button onClick={() => this.props.deleteStory(title)}>x</button>
        <hr />
      </div>
    );
  };

  render() {
    const stories = this.props.stories;
    return <div>{stories.map(this.renderOneStory)}</div>;
  }
}
