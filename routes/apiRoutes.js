const router = require("express").Router();
const path = require("path");
const fs = require("fs");
let newArr = [];
const { v4: uuidv4 } = require("uuid")

    router.get("/notes", (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
            if (err) { console.log(err) }
            else {
                newArr = JSON.parse(data)
                res.json(newArr)
            }
        })
    });
    router.post("/notes", (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
            if (err) { console.log(err) }
            else {
                let newNote = req.body;
                const uuid = uuidv4();
                newNote.id = uuid;
                notes = JSON.parse(data);
                notes.push(newNote);
                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), err => err ? console.log(err) : console.log("new note added"));
                res.json(newNote);
            }
        });
    });
    router.delete("/notes/:id", (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
            if (err) { console.log(err) }
            else {
                notesArray = JSON.parse(data);
                console.log(req.params.id);
                let updateNotes = notesArray.filter(newArr => {
                    return newArr.id != req.params.id
                });
                console.log(updateNotes);
                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(updateNotes), err => err ? console.log(err) : console.log("updated list"));
                return res.json(updateNotes);
            }
        });
    });


module.exports = router;
