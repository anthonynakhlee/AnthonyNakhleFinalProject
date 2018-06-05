import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";


export default class StoryForm extends React.Component {
  state = {
    error: ""
  };
  onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const title = form.title.value;
    const text = form.text.value;
    if (!text) {
      this.setState({ error: "no text provided" });
      return;
    }
    if (!title) {
      this.setState({ error: "no title provided" });
      return;
    }
    form.title.value = "";
    form.text.value = "";
    this.setState({ error: "" });
    this.props.x({ title, text });
  };
  render() {
    const error = this.state.error;
    const title = this.props.title;
    const text = this.props.text;
    return (
      <form onSubmit={this.onSubmit}>
        {error ? <div>{error}</div> : false}
      

        <h1 className="StoryCreaterTitle">So you want to be part of the scare community? </h1>
        <p className="StoryCreaterText">Everyone deserves to share their scary thoughts weither it's on tv or on some lame website no one will probably ever find, but who cares right? Share your story!</p>

        <input placeholder="Your Title" name="title" id="StoryTitle" defaultValue={title} />
        <br />
        <textarea id="StoryText" placeholder="Your Text" name="text" defaultValue={text} />
        <br />
        <input type="submit" value="Ok" color="green" /> <Button href="/paranormal" bsStyle="success"> Back To Reading </Button>
      </form>
    );
  }
}
