// Flux
import { EventEmitter } from 'events';

// Assets
import AppDispatcher from '../dispatcher';

let _formObj = {};

function _addItem(obj) {
	return _formObj = obj;
}

class StoreFactory extends EventEmitter {
	getFormData() {
		return _formObj;
	}

	emitChange() {
		this.emit('change');
	}

	addChangeListener(callback) {
		this.on('change', callback);
	}

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
};

let AppStore = new StoreFactory();

AppDispatcher.register(function(payload) {
	let action = payload.action;

	switch(action.actionType) {
		case 'SUBMIT_FORM':
			_addItem(action.data);
			// console.warn('Bateu aqui pai:', action.data);
		break;

		default:
			return;
	}

	AppStore.emitChange();
});

export default AppStore;