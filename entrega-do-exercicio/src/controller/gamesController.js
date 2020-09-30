const games = require('../models/games.json')

const listOfGames = games.map(element => {
    return {
        id: element.id,
        nome: element.name,
        genero: element.genre,
        plataformas: element.platforms,
        capa: element.cover

    }

})

const getGames = (req, res) => {
    console.log(req.url)
        res.status(200).send(listOfGames)
    
}


const newListOfGames = games.map(element => {
    return {
        id: element.id,
        nome: element.nome,
        genero: element.genre,
        plataformas: element.platforms,
        data_de_lancamento: element.first_release_date,
        slug: element.slug,
        resumo: element.summary,
        empresa: element.company,
        capa: element.cover
    }
})

const getById = (req, res) => {
    console.log(req.url)
    const id = req.params.id
    const findId = games.find(element => element.id == id)
    if (!findId) {
        res.status(404).send('ID não encontrado!')
    } else {
        res.status(200).send(findId)
    }

}

module.exports = {
    getGames,
    getById
}