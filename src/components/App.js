// React
import React, { Component } from 'react';

// Components
import Header from './header/Header';
import Subheader from './subheader/Subheader';

// Assets
import '../css/App.css';

class App extends Component {
  render() {
  	let subtitle = `Search by user or repository.`;

    return (
    	<div>
	      <Header />

	      <Subheader
	      	title="Home"
	      	subtitle={subtitle} />
    	</div>
    );
  }
}

export default App;
