// React
import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
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
				      <select>
				        <option>User</option>
				        <option>Repositories</option>
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
				    	onChange={this.handleChange}
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