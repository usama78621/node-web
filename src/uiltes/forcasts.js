const request = require('postman-request');
const forcast = (longitude,latitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=739bd0bd9292920f6c5f07fe9598ba30&query='+ latitude +','+ longitude +'&units=f'
   
request({url, json:true},(error,{body})=>{
      if(error){
        callback('unable to connect your location!',undefined)
      } else if(body.error){
        callback('unable to fined the location,You Search?',undefined)
      } else{
       callback( undefined,'Now '+ body.current.weather_descriptions+ ' its current Temperature ' +body.current.temperature +' Feel like this ' +body.current.feelslike )
       }
   });
  }

  module.exports = forcast;