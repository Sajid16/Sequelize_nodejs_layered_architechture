const getTutorials = require('./getTutorials');
const getTests = require('./getTests');
const getTutorialById = require('./getTutorialById');
const createTutorials = require('./createTutorials');
const updateTutorial = require('./updateTutorial');
const deleteTutorial = require('./deleteTutorial');

module.exports = {
    paths:{
        '/api/tutorials':{
            ...getTutorials,
            ...createTutorials
        },
        '/api/tutorials/{id}':{
            ...getTutorialById,
            ...updateTutorial,
            ...deleteTutorial
        },
        '/api/tests':{
            ...getTests
        },
    }
}