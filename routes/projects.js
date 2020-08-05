const express = require('express');
const router = express.Router();
const helper = require('../errorHandlers');

const {projects} = require('../data.json');

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    if (!isNaN(id)){
        const project = projects.find(project => project.id === parseInt(id));
        console.log(project)
        if (project) {
            res.render('project', {project});
        } else {
            next(helper.createErrorHelper(418, `Project with id: ${id} has not been created... yet`));
        }
    } else {
        next(helper.createErrorHelper(406, `Please use a valid id for a project, or turn the lights on!`));
    }
});

router.get('/', (req, res) => {
    console.log('Project not specified, redirecting to first project');
    const id = 0;
    res.redirect(`/projects/${id}`);
});


module.exports = router;