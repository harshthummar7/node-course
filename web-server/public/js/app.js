const { response } = require("express")

console.log("javascript file is loded")



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit',(e) => {

    e.preventDefault()
    const location =search.value

    fetch('http://localhost:3000/weather?address=' +location).than((response) => {
    response.json().than((data) => {
        if(data.console.error)
        {
            console.log(data.error)
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})