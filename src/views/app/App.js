// React
import React, { Component } from 'react';

// Components
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';
import Table from '../../components/table/Table';

// Assets
import '../../assets/css/App.css';
import Store from '../../stores';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formulario: ''
		};

		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange() {
		this.setState({
			formulario: Store.getFormData()
		});
	}

	componentDidMount() {
		Store.addChangeListener(this._handleChange);
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._handleChange);
	}

  render() {
  	let subtitle = `Search by user or repository.`;

    return (
    	<div>
	      <Header />

	      <Subheader title="Home" subtitle={subtitle} />

	      {this.state.formulario.input}

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
