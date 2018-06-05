import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";


export default class StoryList extends React.Component {
  renderOneStory = ({ image, title, text }) => {
    return (
      <div>
        {image ? <img alt={title} src={image} /> : false}
        <h4>{title}</h4>
        <p>{text}</p>
        <hr />
      </div>
    );
  };

  render() {
    const stories = this.props.stories;
    return <div>{stories.map(this.renderOneStory)}</div>;
  }
}