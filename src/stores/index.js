// Flux
import { EventEmitter } from 'events';

// Assets
import AppDispatcher from '../dispatcher';


class StoreFactory extends EventEmitter {
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
			console.warn('Bateu aqui pai:', action.data);
		break;

		default:
			return;
	}

	AppStore.emitChange();
});

export default AppStore;