class tutorialService {

    constructor() {
        this._dbContext = require("../../models"); // models path depend on your structure
        this._TutorialModel = this._dbContext.tutorials;
        this.Op = this._dbContext.Sequelize.Op;
    }

    async getAllTutorial(inputParams) {
        const title = inputParams.title;
        var condition = title ? {
            title: {
                [this.Op.like]: `%${title}%`
            }
        } : null;

        let Response = await this._TutorialModel.findAll({
                where: condition
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
        return Response;
    }


    async createTutorial(inputData) {
        // Validate request
        if (!inputData.title) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        // Create a Tutorial
        const tutorial = {
            title: inputData.title,
            description: inputData.description,
            published: inputData.published ? inputData.published : false
        };

        // Save Tutorial in the database
        let Response = await this._TutorialModel.create(tutorial)
            .then(data => {
                return true;
            })
            .catch(err => {
                return false;
            });
        return Response;
    }


    async getSingleTutorial(id) {
        let Response = await this._TutorialModel.findByPk(id)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
        return Response;
    }
}

module.exports = {
    tutorialService
}