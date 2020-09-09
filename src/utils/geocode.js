const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiYXZpcmFsc2h1a2xhIiwiYSI6ImNrZWp5N3pxNTB6MnYydHBjdGI3bjVlNTcifQ.sPeL6mIkiDmEV--C1qLhlQ'

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect!', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find, please check search settings', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode
