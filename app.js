const express = require('express');
const app = express();

const {projects} = require('./data.json');

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes= require('./routes');
const projectRoutes = require('./routes/projects');

const errorHandlers = require('./errorHandlers');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use(errorHandlers.handleNotFound);
app.use(errorHandlers.handleError);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});