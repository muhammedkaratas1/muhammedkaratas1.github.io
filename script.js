function getLyrics() {
    const sanatci = document.getElementById('artist').value;
    const sarki = document.getElementById('song').value;
    const soz = document.getElementById('lyricsOutput');

    if (!sanatci || !sarki) {
        soz.textContent = 'Sanatçı ismi ve şarkı ismini giriniz';
        return;
    }

    fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(sanatci)}/${encodeURIComponent(sarki)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Söz Bulunamadı');
            }
            return response.json();
        })
        .then(data => {
            soz.textContent = data.lyrics;
        })
        .catch(error => {
            soz.textContent = `Hata: ${error.message}`;
        });
}