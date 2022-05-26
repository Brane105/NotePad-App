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
//get note by id 
let getNoteByID = (req, res) => {
  let pid = req.params.pid;
  Notemodel.find({ _id:pid}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

//delete
let deletenoteById = (req, res) => {
  let id = req.params.id; //passing the id through path param
  Notemodel.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('note deleted successfully');
      } else {
        res.send('No such note');
      }
    }
  });
};
module.exports = {
    storeNoteDetails,
    getnotes,
    deletenoteById,
    getNoteByID
}