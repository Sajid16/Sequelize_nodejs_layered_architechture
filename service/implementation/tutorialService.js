class tutorialService {
    static _dbContext;
    static _TutorialModel;

    constructor() {
        this._dbContext = require("../../models"); // models path depend on your structure
        this._TutorialModel = this._dbContext.tutorials;
    }

    getAllTutorial(inputData) {
        console.log(inputData);
        inputData["test"] = "done";
        return inputData;
    }
}

module.exports = {
    tutorialService
}