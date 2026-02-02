
document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' },
    ];

    const albumsData = [
        { name: 'O céu explica tudo', artista: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artista: 'Racionais', image: './img/album-racionais.jpg' },
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    // Corrigido: Usando "artista" consistentemente
    artistsData.forEach(artista => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artista.image}" alt="imagem do ${artista.name}">
            <h3>${artista.name}</h3>
            <p>Artista</p>
        `;
        artistGrid.appendChild(artistCard);
    });

    // Faltava o loop para os álbuns!
    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="capa do álbum ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artista}</p>
        `;
        if (albumsGrid) albumsGrid.appendChild(albumCard);
    });
});


