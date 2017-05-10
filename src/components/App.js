// React
import React, { Component } from 'react';

// Components
import Header from './header/Header';
import Subheader from './subheader/Subheader';
import Form from './form/Form';
import Alert from './alert/Alert';
import Footer from './footer/Footer';

// Assets
import '../css/App.css';

class App extends Component {
  render() {
  	let subtitle = `Search by user or repository.`;
  	let message = `O campo search deve ser preenchido.`;

    return (
    	<div>
	      <Header />

	      <Subheader title="Home" subtitle={subtitle} />

	      <div className="container">
	      	<Form />

	      	<Alert message={message} />
	      </div>

	      <Footer />

    	</div>
    );
  }
}

export default App;
