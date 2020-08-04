const express = require('express');

const app = express();

const {data} = require('./data.json');

app.use('static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes= require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});