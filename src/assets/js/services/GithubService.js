// Assets
import axios from 'axios';
import Config from '../config';

import Actions from '../../../actions';

// ====

function _searchResponse(obj) {
	// console.warn(obj.data)
	Actions.handleGithubData(obj.data);
}

function _searchError(obj) {
	console.warn(obj)
}

// ====

class GithubService {
	constructor() {
		this.api_url = Config.API_URL;
	}

	get(obj) {
		let { type = obj.select, input } = obj;
		let searchUrl = `${this.api_url}/search/${type}?q=${input}`;

		axios
			.get(searchUrl)
			.then((response) => _searchResponse(response))
			.catch((err) => _searchError(err));
	}

	getUser() {
		console.warn('getUser: ');
	}

	getRepoByUser() {
		console.warn('getRepoByUser: ', this.user);
	}
}

export default GithubService;