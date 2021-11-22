class tutorialService {
    // let _dbContext, _TutorialModel;

    constructor() {
        this._dbContext = require("../../models"); // models path depend on your structure
        this._TutorialModel = this._dbContext.tutorials;
    }

    getAllTutorial(inputData) {
        inputData["test"] = "done";
        return inputData;
    }
}

module.exports = {
    tutorialService
}