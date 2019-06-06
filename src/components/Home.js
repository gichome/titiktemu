import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="logo-container">
          <NavLink exact to="/home">
            <img
              className="app-logo"
              src="Images/logo.png"
              alt="titiktumbuh"
            />
          </NavLink>
        </div>
        {/*This is the function to Show the Menu Page*/}
        <div className="right-container">
          <a href="/home/course">
            <NavLink activeClassName="active-navlink-home" exact to="/home/course">Course</NavLink>
          </a>
        </div>
        <div className="left-container">
          <a href="/home/paper">
            <NavLink activeClassName="active-navlink-event" exact to="/home/paper">Paper</NavLink>
          </a>
        </div>
        <a href="/chat">
          <NavLink activeClassName="active-navlink-chat" exact to="/chat">Chat</NavLink>
        </a>
      </div>
    )
  }
}

export default home
