import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";
import StoryForm from "./StoryForm";
import StoryList from "./StoryList";
import AdminStoryList from "./AdminStoryList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




export default class Todo extends React.Component {
  state = {
    stories: [
      
    ]
  };
  toggleApproveStory = title => {
    const story = this.state.stories.find(story => story.title === title);
    if (!story) {
      return;
    }
    story.approved = !story.approved;
    this.setState({ stories: this.state.stories });
  };
  deleteStory = title => {
    const index = this.state.stories.findIndex(story => story.title === title);
    if (index < 0) {
      return;
    }
    this.state.stories.splice(index, 1);
    this.setState({ stories: this.state.stories });
  };
  addStory = newStory => {
    const stories = [...this.state.stories, newStory];
    this.setState({ stories });
  };
  render() {
    // const story_from_category = this.state.stories.filter(story=>story.category === 'creepy')
    const stories_approved = this.state.stories.filter(story => story.approved);
    const stories_disapproved = this.state.stories.filter(
      story => !story.approved
    );
    return (
      <Router>
        <div>
          <Link to="/stories">Stories</Link> -
          <Link to="/admin"> Admin</Link>
          <Switch>
            <Route
              exact
              path="/stories"
              render={() => <StoryList stories={stories_approved} />}
            />
            <Route
              exact
              path="/admin"
              render={() => (
                <AdminStoryList
                  approveToggle={this.toggleApproveStory}
                  deleteStory={this.deleteStory}
                  stories={this.state.stories}
                />
              )}
            />
            <Route
              exact
              path="/add"
              render={() => <StoryForm x={this.addStory} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
