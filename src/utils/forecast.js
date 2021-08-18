const request = require('postman-request')

const forecast=(longitude, latitude, callback)=>{
//    const url =`http://api.weatherstack.com/current?access_key=2135ec2d16b550fd714770e96ca96f8a&unit=m&query=${longitude}, ${latitude}`
const url =`https://api.openweathermap.org/data/2.5/onecall?lat=${longitude}&lon=${latitude}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=01103daa4ee2144ce9b252c12be95651`
    request({ url: url, json:true }, (error, response)=> {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
         //const temp = response.body.current.temp
         //const humidite = response.body.current.humidity
         //callback(undefined,`La temperature est de ${temp} degres et l humidite est de ${humidite} %`)
         //   console.log(response)

            callback(undefined,response)
        }
    })

}



module.exports= forecast