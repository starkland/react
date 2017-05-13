// React
import React, { Component } from 'react';

// Assets
import '../../assets/css/Table.css';

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: ''
		}
}

	componentDidMount() {
		let props = this.props;


		if (props.title && props.data) {
			console.warn(props);

			props.map((item) => {
				this.setState({
					info: {
						html_url: item.html_url
					}
				})
			})
		}
	}

	getInitialState() {
		return {
			items: []
		}
	}

	render() {

		let props = this.props;
		let listItems;

		if (props.data) {
			listItems = props.data.map((item, index) => {
				return(
					<tr key={index}>
						<td>
							<img
								className="image"
								// src={item.data}
								alt="dale" />
						</td>

						<td>
							<a href={item.html_url}>{item.name}</a>
						</td>

						<td>34.977036</td>

						<td>
							<button className="button is-info">
								Info
							</button>
						</td>
					</tr>
				);
			});
		}

		return(
			<table className="table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Username</th>
						<th>Score</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{listItems}
				</tbody>
			</table>
		);
	}
}

export default Table;