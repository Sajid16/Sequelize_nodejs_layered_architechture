module.exports = app => {
    const tutorials = require("../controller/tutorialController.js");
    const tutorialControllerClass = new tutorials.TutorialController();

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", tutorialControllerClass.getAll);

    // Create a new Tutorial
    router.post("/", tutorialControllerClass.createTutorial);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorialControllerClass.getById);

    // Update a Tutorial with id
    router.put("/:id", tutorialControllerClass.updateTutorial);

    // Delete a Tutorial with id
    router.delete("/:id", tutorialControllerClass.deleteTutorial);

    app.use('/api/tutorials', router);
};