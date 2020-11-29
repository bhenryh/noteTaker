let database = require("../db/db.json")
const router = require("express").Router();
const path = require('path');

router.get('/notes',(req,res)=>{
    const api = {reservation: reservationsArray, waitlist: waitList}
    res.json(database);
});



module.exports = router