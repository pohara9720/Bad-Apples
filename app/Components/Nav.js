import React, { Component } from 'react';
import { Link } from "react-router"
import "../../public/App.css"

class Nav extends Component {
  render() {
    return (
      <div className="App">
            <nav>
    <div className="nav-wrapper">
     <Link to={"/"} className="brand-logo">Bad Apples</Link>
      <ul className="right hide-on-med-and-down">
        <li>
        <div className="input-field">
          <Link to={"/"}><input className="navinput" placeholder="Search Apples" id="search" type="search" required /></Link>
        </div>
      </li>
        <li><Link to={"/add"}><i className="material-icons right">add</i>Add an Apple</Link></li>
      </ul>
    </div>
  </nav>
        
        {this.props.children}
      </div>  
    );
  }
}

export default Nav;
