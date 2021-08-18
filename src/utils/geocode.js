const request = require("postman-request");
// Mapbox api key: pk.eyJ1IjoiZ2FsYWhhZHUiLCJhIjoiY2ttdXh4aTU0MDA5aTJ1cjA5MHV1cGF2aiJ9.HXpymEvviOOj6mVnwJHj2A



const geocode = (address, callback)=>{
    const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2FsYWhhZHUiLCJhIjoiY2ttdXh4aTU0MDA5aTJ1cjA5MHV1cGF2aiJ9.HXpymEvviOOj6mVnwJHj2A'

    request({url:urlMapbox, json:true}, (error, response)=>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        }
        else {
            callback(undefined, {location: response.body.features[0].place_name,
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]})
        }
    })
}

module.exports = geocode