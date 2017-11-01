// Include the Main React Dependencies
import React from "react";
import ReactDOM from 'react-dom';

// Grabs the Routes
import Routes from "./config/routes"


import { Router, browserHistory } from "react-router"
import Nav from "./Components/Nav"


// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(<Routes />
, document.getElementById("app"));
