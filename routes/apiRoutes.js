let database = require('../db/db.json')
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let newArr = [];
const { v4: uuidv4 } = require('uuid')

module.exports = router => {
    router.get('/notes', (req, res) => {
        fs.readFile('../db/db.json', (err, data) => {
            if (err) { console.log(err) }
            else {
                newArr = JSON.parse(data)
                res.json(newArr)
            }
        })
    });

};
