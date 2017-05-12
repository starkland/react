// React
import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Components
import App from '../views/app/App';
import Form from '../components/form/Form';
import NotFound from '../views/notfound/NotFound';

class Routes extends React.Component {
	render() {
		return(
			<Router>
		  	<div>
			    <Route
			        exact
			        component={App}
			        path="/"
			    />
			    <Route
			        component={Form}
			        path="/about"
			    />
			    <Route
			        component={NotFound}
			        path="*"
			    />
		  	</div>
			</Router>
		);
	}
}

export default Routes;

