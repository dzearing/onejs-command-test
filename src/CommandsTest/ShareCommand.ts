import ViewModel = require('../onejs/ViewModel');
import Selection = require('../onejs/Selection');

class ShareCommand extends ViewModel {
	name = 'Share stuff';

	selection: Selection;

	execute() {
		alert("I am sharing");
	}	

	isEnabled() {
		return this.selection.getCount() > 0;
	}
}

export = ShareCommand;
