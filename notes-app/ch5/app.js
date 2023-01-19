const fs =require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)

user.name="Harsh"
user.age=21
const userJson = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJson);