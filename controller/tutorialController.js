const tuorialServ = require("../service/implementation/tutorialService.js");
let _tutorialService;

class TutorialController {
    constructor() {
        _tutorialService = new tuorialServ.tutorialService();
    }

    async getAll(req, res) {
        let Data = await _tutorialService.getAllTutorial(req.query);
        if (Data.length > 0) {
            return res.status(200).json({
                isExecuted: true,
                data: Data
            });
        } else {
            return res.status(200).json({
                isExecuted: false,
                data: Data
            });
        }
    };


    async createTutorial(req, res) {
        let Data = await _tutorialService.createTutorial(req.body);
        if (Data) {
            return res.status(200).json({
                isExecuted: true
            });
        } else {
            return res.status(200).json({
                isExecuted: false
            });
        }
    };

    async getById(req, res) {
        try {
            let Data = await _tutorialService.getSingleTutorial(req.params.id);
            if (Data) {
                return res.status(200).json({
                    isExecuted: true,
                    data: Data
                });
            } else {
                return res.status(200).json({
                    isExecuted: false,
                    data: Data
                });
            }
        } catch (error) {
            return res.status(500).json({
                isExecuted: false,
                data: error
            });
        }
    };

    async updateTutorial(req, res) {
        try {
            let Data = await _tutorialService.updateTutorial(req.params, req.body);
            if (Data) {
                return res.status(200).json({
                    isExecuted: true
                });
            } else {
                return res.status(200).json({
                    isExecuted: false
                });
            }
        } catch (error) {
            return res.status(500).json({
                isExecuted: false,
                data: error
            });
        }
    };


    async deleteTutorial(req, res) {
        try {
            let Data = await _tutorialService.deleteTutorial(req.params.id);
            if (Data) {
                return res.status(200).json({
                    isExecuted: true
                });
            } else {
                return res.status(200).json({
                    isExecuted: false
                });
            }
        } catch (error) {
            return res.status(500).json({
                isExecuted: false,
                data: error
            });
        }
    };

}

module.exports = {
    TutorialController
}