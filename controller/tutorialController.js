const db = require("../models"); // models path depend on your structure
const Tutorial = db.tutorials;

class TutorialController {

    constructor() {

    }

    static getAllTutorial(req, res) {
        console.log(req.body);
        // const title = req.query.title;
        // var condition = title ? {
        //     title: {
        //         [Op.like]: `%${title}%`
        //     }
        // } : null;

        // Tutorial.findAll({
        //         where: condition
        //     })
        //     .then(data => {
        //         res.send(data);
        //     })
        //     .catch(err => {
        //         res.status(500).send({
        //             message: err.message || "Some error occurred while retrieving tutorials."
        //         });
        //     });
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