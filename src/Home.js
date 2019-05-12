import React, { Component } from 'react';
import Navbar from './Navbar';
//Impoort Router to get each page of Application
import { BrowserRouter, Route } from 'react-router-dom';
//Import Home, About, and Contact Page
import MainTodoApp from './App';
//import About from './About'
//import Chat from './Chat'

class Home extends Component {
  render () {
    return (
      //Make App Running within Browser Router//
      <BrowserRouter> 
        <div className="Home">
          <Navbar />
          {/*Exact load path and only route path 
           <Route path='/Chat' component={Chat} />
          <Route path='/About' component={About} />*/}
          <Route exact path='/' component={Home} />
        </div>
      </BrowserRouter>
      <Main

    );
  }
}

export default Home;
