const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

let removedNote;

class Store{
    read(){
        return readFile("db/db.json", "utf8")
    }
    write(note){
        return writeFile("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes)=> {
            let parsedNotes
            try {
                parsedNotes = [].concat(JSON.stringify(notes))
            } catch (error) {
                parsedNotes = []
            }
            return parsedNotes
        })
    }


addNote(note){
    const { title, text } = note;
    if (!title || !text){
        throw new Error("Please Enter Input")
    }
    const newNote = {title, text, id};
    return this.getNote().then((note) => [...note, newNote])
    .then((updatedNote) => this.write(updatedNote))
    .then(() => newNote)
    }

    deleteNote(note){
        return this.getNote().then((notes) => {
            notes.forEach(async function(element){
                if (element.id == note.id){
                    deletedElement = element;
                }
            })
            const noteIndex = note.indexOf(removedNote);
            note.splice(noteIndex, 1);
            this.write(note);
            return note;
        })
    }
}

module.exports = new Store()

//method for "add note" in which you utilize function, you will get information from user : id, text, title; store it in an object. return this.get
//