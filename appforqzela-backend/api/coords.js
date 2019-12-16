module.exports = app => {
    getCoords = (req, res) => {
        /* app.db */
        app.api.models.coords
            .find({})
            .then(document => {
                //Criando o objeto que deve ser retornado, retornando somente o id e as coordenadas
                document.map((value, index) => {
                    let objt = {}
                    objt.id = value._doc._id
                    objt.geometry = value._doc.geometry
                    document[index] = objt
                })
                res.json(document)
            })
            .catch(err => res.status(400).json(err))
    }
    return { getCoords }
}
