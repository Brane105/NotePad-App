let express = require('express');
let router = express.Router();
let NoteController = require('../controller/note.controller');
router.post('/notes', NoteController.storeNoteDetails);
router.get('/',NoteController.getnotes );
module.exports = router;
