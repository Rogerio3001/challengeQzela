module.exports = app => {
    app.get('/coords', app.api.coords.getCoords)
    app.get('/property/:id', app.api.properties.getProperty)
}