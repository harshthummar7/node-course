const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(arg)
    {
        notes.addNote(arg.title,arg.body)
    }  
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(arg)
    {
        notes.removeNote(arg.title)   
        
    }  
})


yargs.command({
    command:'list',
    describe:'list a note',
    handler(arg)
    {
        notes.listNote()   
        
    }  
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(arg)
    {
        notes.readNote(arg.title)
    }  
})

yargs.parse();