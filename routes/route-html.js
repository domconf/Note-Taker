const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {  //sets up route to display html page upon GET request
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req, res) => {  //sets up route to displays the notes page upon GET request.
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
