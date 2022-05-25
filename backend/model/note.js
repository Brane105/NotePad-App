const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
},{_id:false});
notesSchema.plugin(AutoIncrement , {id: 'note_id_counter', inc_field: '_id'});
let Notemodel = mongoose.model('note', notesSchema,"Note");
module.exports = Notemodel;

