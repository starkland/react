// React
import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Home PAGE</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About PAGE</h2>
  </div>
);

const AppRoutes = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	</Router>
);

export default AppRoutes;

// https://imasters.com.br/front-end/javascript/gerenciando-rotas-com-react-router/