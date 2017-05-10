// React
import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			select: 'users'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(evt) {
		const target = evt.target;

		this.setState({
			[target.name]: target.value
		});
	}

	handleSubmit(evt) {
		console.warn('Os dados foram:', this.state);
		evt.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="field">
				  <label className="label">Search by:</label>
				  <p className="control">
				    <span className="select">
				      <select name="select" onChange={this.handleInputChange} value={this.state.select}>
				        <option value="users">User</option>
				        <option value="repositories">Repositories</option>
				      </select>
				    </span>
				  </p>
				</div>

				<div className="field">
				  <label className="label"></label>
				  <p className="control">
				    <input
				    	className="input"
				    	type="text"
				    	name="input"
				    	value={this.state.input}
				    	onChange={this.handleInputChange}
				    	placeholder="Search here" />
				  </p>
				</div>

				<div className="field is-grouped">
				  <label className="label"></label>
				  <p className="control">
				    <button className="button is-primary">
				      Search
				    </button>
				  </p>
				</div>
			</form>
		);
	}
}

export default Form;