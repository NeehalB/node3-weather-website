const request = require('postman-request')

const forecast = (lat,lon,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=fdb37327cfce768c18c1a7db200b5893&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon)
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services',undefined)  
        }
        else if(body.error){
            callback('Data not found-2',undefined)
        }
        else{
            callback(undefined,'The temperature is currently '+ body.current.temperature + ' degrees out. It feels like  '+body.current.feelslike+ ' degrees out.')

        }
    })
}

module.exports = forecast