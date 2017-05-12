// Assets
import AppDispatcher from '../dispatcher';

let Actions = {

	submitForm(dataObj) {
		AppDispatcher.handleViewAction({
			actionType: 'SUBMIT_FORM',
			data: dataObj
		});
	}

};

export default Actions;