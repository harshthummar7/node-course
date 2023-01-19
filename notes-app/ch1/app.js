const fs =require('fs')

fs.writeFileSync('note.txt','This file was created by node.js !')

fs.appendFileSync('note.txt','My name is Harsh')