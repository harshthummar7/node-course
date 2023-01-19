const fs = require('fs')

const chalk = require('chalk');
const { title } = require('process');

const addNote = (title,body) => {
    const notes = loadNotes();
    //console.log(notes)
    const duplicateNotes = notes.find((note) => {
        return note.title === title
    })

    if(!duplicateNotes.length)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.green.inverse('Note title taken!'))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep =  notes.filter((note) => {
        return note.title !== title 
    })
    if(notesToKeep.length < notes.length)
    {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const listNote = () => {
    const notes = loadNotes()
    console.log("Your notes!")

    notes.forEach((note) => {
        console.log(note.title);
        
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })

    if(note)
    {
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log("Note not found!")
    }
            
}


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes = () =>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}



module.exports = {
        addNote:addNote,
        removeNote:removeNote,
        listNote:listNote,
        readNote: readNote    
}