const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

class Store{
    read(){
        return readFile("db/db.json", "utf8")
    }
    write(note){
        return writeFile("db/db.json", JSON.stringify(note))
    }
    getNote(){
        return this.read().then((note)=> {
            let newNote
            try {
                newNote = [].concat(JSON.parse(note))
            } catch (error) {
                newNote = []
            }
            return newNote
        })
    }
}
module.exports = new Store()

//method for "add note" in which you utilize function, you will get information from user : id, text, title; store it in an object. return this.get
//