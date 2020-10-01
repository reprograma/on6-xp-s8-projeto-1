//Como alterar o JSON

const musicas = [{
    "id": 1,
    "name": "Evidências",
    "duration_ms": 279280,
    "preview_url": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
    "album": {
        "id": 154,
        "name": "Do Tamanho Do Nosso Amor",
        "release_date": "2013-01-01",
        "total_tracks": 14,
        "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
    },
    "artists": {
        "id": "7gfkYbxpguEc9bm6m8TpAr",
        "name": "Chitãozinho & Xororó"
    }
}]

// console.log(musicas);
let listaNovaMusica = [];

for(let i = 0; i < musicas.length; i++){ // o for percorre uma lista // o length ele mostra o tamanho de um objeto string
    let musica = musicas[i];

    const novaMusica = { // variável criando uma nova estrutura
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    listaNovaMusica.push(novaMusica) // adicionando no array a nova estrutura
}
// console.log(listaNovaMusica)

//map cria novo array, uma nova lista

const lista = musicas.map(musica => {  // O map invoca a função callback passada por argumento para cada elemento do Array e 
                                      // devolve **um novo Array** como resultado
    const novaMusica = {  // esse novo objeto é um novo "contrato"
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    return novaMusica
})

console.log(lista)

