let Notemodel = require('../model/note');

let storeNoteDetails = (req, res) => {
    let notepad = new Notemodel({
        title:req.body.title,
        description:req.body.description,
        date:req.body.dob,
        });  
    notepad.save((err, result) => {
      if (!err) {
        res.send('Records stored successfully Note Id : '+result._id);
      } else {
        res.send("Record didn't store...");
      }
    })
}
let getnotes = (req, res) => {
    Notemodel.find({}, (err, result) => {
      if (!err) {
        res.json(result);
      }
    });
};

module.exports = {
    storeNoteDetails,
    getnotes 
}