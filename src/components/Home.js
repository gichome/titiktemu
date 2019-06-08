import React, { Component } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class home extends Component {
    render() {
        return (
            <div className="home-container">
              <div className="home-cell" id="h1">
                <h1>
                  <NavLink exact to="/home/paper">
                    <Button className="Paper">
                      Search your paper here
                    </Button>
                  </NavLink>
                </h1>
              </div>
              <div className="home-cell" id="h2">
                <h1>
                  <NavLink exact to="/home/Course">
                    <Button className="Course">
                      Search your course here 
                    </Button>
                  </NavLink>
                </h1>
              </div>
          </div>
        )
    }
}

export default home;