const musicas = require("../model/musicas.json")

// console.log(musicas)

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    return novaMusica
})


const getMusicas = (resquest, response) => {
    console.log(resquest.url)
    response.status(200).send(novaListaMusicas)
}

module.exports = {
    getMusicas
}