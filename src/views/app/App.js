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
import GithubStore from '../../stores/github';

// Services
import Github from '../../assets/js/services/GithubService';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formulario: '',
			githubData: ''
		};

		this._handleChange = this._handleChange.bind(this);
		this._githubStore = this._githubStore.bind(this);

		this._github = new Github();
	}

	_handleChange() {
		this._github.get(Store.getFormData());

		this.setState({
			formulario: Store.getFormData()
		});
	}

	_githubStore() {
		// os dados do github estarão disponíveis aqui
		this.setState({
			githubData: GithubStore.getData()
		});

		console.warn('App:', this.state.githubData.items);
	}

	componentDidMount() {
		Store.addChangeListener(this._handleChange);
		GithubStore.addChangeListener(this._githubStore);
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._handleChange);
		GithubStore.removeChangeListener(this._githubStore);
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
