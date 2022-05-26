let express = require('express');
let router = express.Router();
let NoteController = require('../controller/note.controller');
router.get('/getNoteByID/:pid', NoteController.getNoteByID);
router.delete('/deletenoteById/:id', NoteController.deletenoteById);
router.post('/notes', NoteController.storeNoteDetails);
router.get('/',NoteController.getnotes );
module.exports = router;
