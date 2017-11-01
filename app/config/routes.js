// Inclue the React library
import React from "react";
// Include the react-router module

import { Router, Route ,browserHistory } from "react-router"



// Reference the high-level components
import Nav from "../Components/Nav";
import Add from "../Components/Add";
import No from "../Components/No";
import Manual from "../Components/Manual";


const Routes = (props) =>(
	<Router history={browserHistory}>
		<Route path="/" component={Nav}>
			<Route path="/add" component={Add} />
			<Route path="/manual" component={Manual} />
			<Route path="*" component={No} />
		</Route>

	</Router> 
	);

export default Routes;