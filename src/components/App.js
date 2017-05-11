// React
import React, { Component } from 'react';

// Components
import Header from './header/Header';
import Subheader from './subheader/Subheader';
import Form from './form/Form';
import Footer from './footer/Footer';
import Table from './table/Table';

// Assets
import '../css/App.css';
import Store from '../stores';


class App extends Component {
	_handleChange(obj) {
		console.warn('Terminei aqui..', obj);
	}

	componentDidMount() {
		Store.addChangeListener(this._handleChange);
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._handleChange)
	}

  render() {
  	let subtitle = `Search by user or repository.`;

    return (
    	<div>
	      <Header />

	      <Subheader title="Home" subtitle={subtitle} />

	      <div className="container">
	      	<Form />

	      	<Table type="users" />
	      </div>

	      <Footer />
    	</div>
    );
  }
}

export default App;
