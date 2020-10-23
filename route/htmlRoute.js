const path = require("path");
const router = require("express").Router();

router.get("/note", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = router; 