var keystone = require('keystone');
keystone.init({

  'name': 'LPIC quiz app',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update': true,
  'mongo': 'mongodb://127.0.0.1/my-project',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'users': 'User',
  'LPIC1': 'LPIC1'
});


keystone.start();
