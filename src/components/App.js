// React
import React, { Component } from 'react';

// Components
import Header from './header/Header';
import Subheader from './subheader/Subheader';
import Form from './form/Form';
import Alert from './alert/Alert';

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

      	<Form />

      	<Alert message={message} />
    	</div>
    );
  }
}

export default App;
