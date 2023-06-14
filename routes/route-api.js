const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");


//get route
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});


//post route
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});


//delete route
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json", "utf8");
    const dataJSON = JSON.parse(data);
    const userNote = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(userNote));
    res.json("Deleted.");
});

module.exports = router; 