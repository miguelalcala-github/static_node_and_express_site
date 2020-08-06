const express = require('express');
const router = express.Router();

const helper = require('../errorHandlers');
const {projects} = require('../data.json');

// Getting route for a given id project
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    // If id is a number
    if (!isNaN(id)){
        // Find project
        const project = projects.find(project => project.id === id);
        // If project exist
        if (project) {
            // Render page with project
            res.render('project', {project});
        } else {
            // else create and pass an error with friendly message handleError
            next(helper.createErrorHelper(418, 
                `Project with id: ${id} has not been created... yet`));
        }
    } else {
        // else (not a number) create and pass an friendly error to handleError
        next(helper.createErrorHelper(406, 
            `Please use a valid id for a project, or turn the lights on!`));
    }
});

// Getting route for non project specified
router.get('/', (req, res) => {
    console.log('Project not specified, redirecting to first project');
    // Redirecting to first project
    res.redirect(`/projects/${projects[0].id}`);
});


module.exports = router;