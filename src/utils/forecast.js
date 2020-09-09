const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1b7bda80733329ecee99fbf6b21248b9&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('unable to find, please check search settings', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + ', the current temparature is ' + body.current.temperature + ' degrees, and humidity is ' + body.current.humidity + ' percent'
            )
        }
    })

}

module.exports = forecast
