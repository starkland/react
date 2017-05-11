// Assets
import AppDispatcher from '../dispatcher';

let Actions = {

	submitForm(dataObj) {
		console.warn('Os dados foram:', dataObj);

		AppDispatcher.handleViewAction({
			actionType: 'SUBMIT_FORM',
			data: dataObj
		});
	}

};

export default Actions;