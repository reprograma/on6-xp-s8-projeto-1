const { request, response } = require("../app");
const musicas = require("../model/musicas.json");

//console.log(musicas);

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        "id": musica.id,
        "nome": musica.name,
        "amostra": musica.preview_url,
        "nome_album": musica.album.name,
        "imagem": musica.album.url,
        "artista": musica.artists.name
    }

    return novaMusica
});

const getMusicas = (request, response) => {
    console.log(request.url);
    response.status(200).send(novaListaMusicas);
}

const getMusicasById = (request, response) =>{
    const id = request.params.id;
    const musica = novaListaMusicas.find(musica => musica.id == id);

    if(musica){
        response.status(200).send(musica);
    } else{
        response.status(404).send("Musica não encontrada");
    }
}

const listaArtistas = musicas.map(musica => {
    const novoArtista =  {
        id: musica.artists.id,
        nome: musica.artists.name
    }
    return novoArtista;
})

const getArtistas = (request, response) => {

    const listaSemRepetir = [];

    listaArtistas.forEach(artista => {
        const encontrei = listaSemRepetir.find(item => item.id === artista.id);
        if(!encontrei){
            listaSemRepetir.push(artista);
        }
    })
    response.status(200).send(listaSemRepetir);
}

const listaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name,
        duracao: musica.duration_ms
    }
    return novaMusica
})

const getArtistasById = (request, response) =>{
    const id = request.params.id;
    const artista = listaArtistas.find(artista => artista.id == id);

    if(artista){

        const musica = novaListaMusicas.filter(item => item.artista == artista.nome);

        const novoArtista = {
            id: artista.id,
            nome: artista.nome,
            musica: musicas
        }
        response.status(200).send(novoArtista);
    } else{
        response.status(404).send("Artista não encontrado");
    }
}

const listaAlbuns = musicas.map(musica => {
    const album = {
        id: musica.album.id,
        nome: musica.album.name,
        data_lancamento: musica.album.release_date,
        total_musicas: musica.album.total_tracks,
        imagem: musica.album.url
    }
    return album
})

const getAlbuns = (resquest, response) => {

    let listaSemRepetir = []

    listaAlbuns.forEach(album => {
        if(!listaSemRepetir.find(item => item.id === album.id)){
            listaSemRepetir.push(album)
        }
    })

    response.status(200).send(listaSemRepetir)
}

const getAlbumPorNome = (resquest, response) => {
    const nome = resquest.params.nome

    const album = listaAlbuns.find(album => album.nome.toLowerCase().split(' ').join('-') === nome)

    const musicasAlbum = novaListaMusicas.filter(musica => {
        return musica.album_nome.toLowerCase().split(' ').join('-') === nome
    })

    const novoAlbum =  {
        id: album.id,
        nome: album.nome,
        data_lancamento: album.data_lancamento,
        total_musicas: album.total_musicas,
        imagem: album.imagem,
        musicas: musicasAlbum
    }

    response.status(200).send(novoAlbum)
}

module.exports = {
    getMusicas,
    getMusicasById,
    getArtistas,
    getArtistasById,
    getAlbuns,
    getAlbumPorNome
}