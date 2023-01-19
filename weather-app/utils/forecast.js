const request = require('request')
const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=39d1558d254e14f4584fc0576567e3e1&query='+latitude+','+longitude+ '&units=f'
     
    request({url,json:true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find lo0cation',undefined)
        }
        else{
            callback(undefined,'It is currently' +body.current.temperature+ 'degree out. It feels like ' + body.current.feelslike +'degree out')
        }
    })
}
 
module.exports = forecast