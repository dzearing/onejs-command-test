import ViewModel = require('../onejs/ViewModel');
import List = require('../onejs/List');
import ShareCommand = require('./ShareCommand');
import UploadCommand = require('./UploadCommand');
import Selection = require('../onejs/Selection');

class CommandsTestModel extends ViewModel {
    /// <summary>
    /// View model class for defining the observable data contract for the CommandsTest view.
    /// 
    /// This class is optional and can be removed if unnecessary. Remove the
    /// js-model attribute from the CommandsTest.html template's root element if you do.
    /// </summary>

    selection = new Selection();

    commands = new List<any>([
        new UploadCommand(),
        new ShareCommand({ selection: this.selection }),
        new ShareCommand({ selection: this.selection })
    ]);


    onInitialize() {
        this.selection.setList(new List<any>([ { }, { } ]));
    }

    toggleSelection() {
        if (this.selection.getCount() == 0) {
            this.selection.setSelected('key', true);
        } else {
            this.selection.clear();
        }
    }
}

export = CommandsTestModel;