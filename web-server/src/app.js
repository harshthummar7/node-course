const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')


//Define path for express config
const pathDirectory = path.join(__dirname,'./templates/views')
const viewsPath = path.join(__dirname,'./templates/views')
const partialPath = path.join(__dirname,'./templates/partials')

//Setup handler engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(pathDirectory))
 


app.get('',(req,res) => {
    res.render('index',{
        title:"Weather App",
        name:"Harsh Thummar"
    })
})
  
app.get('/about',(req,res) => {
    res.render('about',{
        title:"About Me",
        name:"Harsh Thummar"
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        helpfulText:"This is some helpful text",
        title:"Help",
        name:"Harsh Thummar"
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title:'404',
        name:"Harsh Thummar",
        errorMsg:"Help artical  not found"
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.address)
    {
        return res.send({
            error:'please add address'
        })
    }
    geocode(address, (error,{latitude,longitude,location} = {}) => {
        if(error)
        {
            return res.send({error})
        }
    
        forecast(latitude,longitude,(error,forecastData) => {
            if(error){
                return res.send({error})
            }
               
           res.send({
            forecast:forecastData,
            location,
            address:req.query.address

           })
        })
    })

    // res.send({
    //     forecast:"it is snowing",
    //     location:"philadelphia",
    //     address:req.query.address
    // })
})


app.get('*',(req,res) => {
    res.render('404',{
        title:'404',
        name:"Harsh Thummar",
        errorMsg:"Page not found"
    })
})


// app.get('',(req,res) => {
//     res.send('hello express')
// })

// app.get('/help',(req,res) => {
//     res.send('help page')
// })
 
// app.get('/about',(req,res) => {
//     res.send('<h1>about</h1>')
// })




app.listen(3000, () => {
       console.log("server start");
})