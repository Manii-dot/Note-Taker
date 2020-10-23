const express = require("express");
const store = require("../db/store.js");
const router = require("express").Router();

router.get("/notes", (req,res)=>{
    store.getNote().then((note) => res.json(note))
})

router.post("/store", (req, res) => {
    note.addNote(req.body).then((note) => res.json(note))
})

router.delete("/store/:id", (req, res) => {
    note.deleteNote(req.params).then((note) => res.json(note))
})

module.exports = router; 