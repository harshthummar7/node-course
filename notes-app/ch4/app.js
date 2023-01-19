const { argv } = require('yargs');
const yargs = require('yargs')

console.log(process.argv)

//creating add command
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
    handler:function(arg)
    {
        console.log('Title: '+arg.title);
        console.log('Body: '+arg.body);
    }  
})

//creating list command
yargs.command({
    command:'list',
    describe:'list a note',
    handler:function()
    {
        console.log('listing the note');
    }  
})

//creating read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function()
    {
        console.log('reading the note');
    }
})

yargs.parse();

//console.log(yargs.argv)