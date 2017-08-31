var app = module.exports = express();
app.use(app.router);
require('./routes');
var mongoose = require('mongoose');
mongoose.connect('connStr'); //connect once
