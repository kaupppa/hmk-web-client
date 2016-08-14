
switch (process.env.NODE_ENV) {
  case 'dev':
  case 'development':
    module.exports = require('./config/webpack.dev');
    break;
  default:
    module.exports = require('./config/webpack.prod');
}
