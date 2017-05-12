// React
import React, { Component } from 'react';

// Assets
import '../../css/Table.css';

class Table extends Component {
	render() {
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
					<tr>
						<td>
							<img
								className="image"
								src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"
								alt="dale" />
						</td>

						<td>
							<a href="">thulioph</a>
						</td>

						<td>34.977036</td>

						<td>
							<button className="button is-info">
								Info
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Table;