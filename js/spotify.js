const musicUrls = [
    "https://open.spotify.com/track/2TvCSNYVEtsTI5Fh8i99NM?si=bfd3b903a73d487e",
    "https://open.spotify.com/track/1MLTY0LQAsQuUjUnGWfbiX?si=e7c0611672ad492c",
    "https://open.spotify.com/track/1mBTY5uTi7SJmohPsyl2Xr?si=68a45310574a406e",
    "https://open.spotify.com/track/23T9s9PXQDsUwgbITy8Cgi?si=56f3f070b0754672",

];

const musicList = document.getElementById('music-list');

async function loadSpotifyTracks() {
    for (const url of musicUrls) {
        try {
            const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`;
            const res = await fetch(oembedUrl);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const json = await res.json();

            // Cria o card
            const card = document.createElement('div');
            card.className = 'music-card';
            card.innerHTML = `
        <img class="music-image" src="${json.thumbnail_url}" alt="${json.title}" />
        <h3 class="music-name">${json.title}</h3>
        <a href="${url}" target="_blank" class="music-link">Ouça no Spotify</a>
      `;

            musicList.appendChild(card);
        } catch (err) {
            console.warn('Erro ao carregar música do Spotify:', err);
        }
    }
}

// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadSpotifyTracks);
