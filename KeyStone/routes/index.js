var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
    res.send('<h1>Not Found</h1><br>Tell To Mohammad Niki(Admin)');
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    //TODO: must change in final release
    res.send('<h1>Page Not Found<br>you have error</h1><br>Tell To Mohammad Niki' + err, title, message);
});

// Load Routes
var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api')
};

// Bind Routes
exports = module.exports = function(app) {

    app.get('/', routes.views.index);

    app.get('/api/getcat', keystone.middleware.api, routes.api.restful.getcat);
    app.get('/api/:quiz', keystone.middleware.api, routes.api.restful.list);
    //app.all('/api/restful/create', keystone.middleware.api, routes.api.restful.create);
    //app.get('/api/restful/:id', keystone.middleware.api, routes.api.restful.get);
    //app.all('/api/restful/:id/update', keystone.middleware.api, routes.api.restful.update);
    //app.get('/api/restful/:id/remove', keystone.middleware.api, routes.api.restful.remove);

}
