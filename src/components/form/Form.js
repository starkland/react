// React
import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			select: 'users'
		};

		this.handleSelect = this.handleSelect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleSelect(evt) {
		this.setState({
			select: evt.target.value
		})
	}

	handleInput(evt) {
		this.setState({
			input: evt.target.value
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
				      <select onChange={this.handleSelect} value={this.state.select}>
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
				    	value={this.state.input}
				    	onChange={this.handleInput}
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