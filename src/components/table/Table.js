// React
import React, { Component } from 'react';

// Assets
import '../../assets/css/Table.css';

// ====

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: ''
		};

		this.viewMore = this._viewMore;
	}

	_viewMore() {
		console.warn('Bind', this.children);
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
								src={item.avatar_url}
								alt={item.login} />
						</td>

						<td>
							<a href={item.html_url} target='_blank'>{item.login}</a>
						</td>

						<td>{item.score}</td>

						<td>
							<button
								className="button is-info"
								onClick={this.viewMore}>
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