const express = require("express");
const store = require("../db/store.js");
const router = require("express").Router();

router.get("/note", (req,res)=>{
    store.getNote().then((note) => res.json(note))
});

module.exports = router; 