const express = require('express');
const app = express();
// Static route to serve the static files in the public folder
app.use('/static', express.static('public'));
// Setting "view engine" to pug
app.set('view engine', 'pug');
// Main routes: '/' and 'about'
const mainRoutes= require('./routes');
// Projects routes '/:id'
const projectRoutes = require('./routes/projects');
// Error handlers
const errorHandlers = require('./errorHandlers');

app.use(mainRoutes);
app.use('/projects', projectRoutes);
// Error handler for error 404 not found page
app.use(errorHandlers.handleNotFound);
// Global error handler
app.use(errorHandlers.handleError);

// Config for heroku to deploy server or 3000 default port for local purpose
app.listen(process.env.PORT || 3000, () => {
    console.log('The application is running on localhost:3000');
});