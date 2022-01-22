const getTutorials = require('./getTutorials');
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
        }
    }
}