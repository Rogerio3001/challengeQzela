module.exports = app => {
    getProperty = (req, res) => {
        app.db
            .findOne({ _id: req.params.id })
            .then(document => {
                //Criando o objeto que deve ser retornado, retornando somente o id e as propriedades
                res.json(document._doc.properties)
            })
            .catch(err => res.status(400).json(err))
    }
    return { getProperty }
}