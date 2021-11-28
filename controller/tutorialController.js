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
                data: Data
            });
        }
    };

}

module.exports = {
    TutorialController
}

// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }

//     // Create a Tutorial
//     const tutorial = {
//         title: req.body.title,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false
//     };

//     // Save Tutorial in the database
//     Tutorial.create(tutorial)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Tutorial."
//             });
//         });
// };

// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? {
//         title: {
//             [Op.like]: `%${title}%`
//         }
//     } : null;

//     Tutorial.findAll({
//             where: condition
//         })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
// };