// React
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import App from '../components/App';
import Form from '../components/form/Form';

class Routes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Router>
		  	<div>
			    <Route
			        component={App}
			        path="/"
			    />
			    <Route
			        component={Form}
			        path="/about"
			    />
		  	</div>
			</Router>
		);
	}
}

export default Routes;

