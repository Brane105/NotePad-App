//Load all required modules
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:27017/notepad';

app.use(bodyParser.urlencoded({ extended: true })); // enable body part data
app.use(bodyParser.json()); // json data.
app.use(cors()); // used model from line 5

//Database connection without warning
const mongooseDbOption = {
  // to avoid warning
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, mongooseDbOption); //ready to connect
mongoose.connection;
var Notes = require('./router/note.router');
//http://localhost:8080/notes
// http://localhost:8080/
app.use('/', Notes);
app.listen(8080, () => console.log('server is runnig on port no.8080'));