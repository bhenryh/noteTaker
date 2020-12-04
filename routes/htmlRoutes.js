// const router = require('express').Router();
const path = require('path');

module.exports = router => {

    router.get('/notes', (req, res) => {
        // console.log(res);
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
    router.get('*', (req, res) => {
        // console.log(res);
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
}