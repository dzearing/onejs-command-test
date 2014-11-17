class UploadCommand {
	name = "Upload";
	
	execute() {
		alert("I'm uploading");
	}

    isEnabled() {
    	return true;
    }
}

export = UploadCommand;
