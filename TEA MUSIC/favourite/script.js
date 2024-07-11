// document.addEventListener('DOMContentLoaded', () => {
//     const favoritesList = document.querySelector('.favorites-list');
//     const favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];
//     let currentAudio = null;

//     favoriteSongs.forEach(song => {
//         addSongToFavoritesList(song.title, song.artist, song.cover, song.src);
//     });

//     function addSongToFavoritesList(title, artist, cover, src) {
//         const favoriteSong = document.createElement('div');
//         favoriteSong.classList.add('cardmusic');
        
//         favoriteSong.innerHTML = `
//             <div class="card">
//                 <img src="${cover}" alt="Song Cover" class="cover-img">
//                 <div class="card-content">
//                     <h3 class="song-title">${title}</h3>
//                     <p class="artist-name">${artist}</p>
//                     <button class="play-button" data-src="songs/${src}"><i class="songItemplay fa-solid fa-play"></i></button>
//                 </div>
//                 <button class="remove-button"><i class="fa-solid fa-trash"></i> Remove</button>
//             </div>
//         `;

//         favoritesList.appendChild(favoriteSong);

//         const playButton = favoriteSong.querySelector('.play-button');

//         playButton.addEventListener('click', () => {
//             const src = playButton.dataset.src;

//             // Pause and reset current playing audio if different song is played
//             if (currentAudio && currentAudio.src !== src) {
//                 currentAudio.pause();
//                 currentAudio.currentTime = 0;
//                 const previousPlayButton = document.querySelector('.play-button.playing');
//                 if (previousPlayButton) {
//                     previousPlayButton.innerHTML = '<i class="songItemplay fa-solid fa-play"></i>';
//                     previousPlayButton.classList.remove('playing');
//                 }
//             }

//             if (currentAudio && !currentAudio.paused && currentAudio.src === src) {
//                 // Pause the audio
//                 currentAudio.pause();
//                 playButton.innerHTML = '<i class="songItemplay fa-solid fa-play"></i>';
//                 playButton.classList.remove('playing');
//             } else {
//                 // Play the audio
//                 if (!currentAudio || currentAudio.src !== src) {
//                     currentAudio = new Audio(src);
//                 }
//                 currentAudio.play().then(() => {
//                     playButton.innerHTML = '<i class="songItemplay fa-solid fa-pause"></i>';
//                     playButton.classList.add('playing');
//                 }).catch(error => {
//                     console.error('Playback error:', error);
//                 });
//             }
//         });

//         const removeButton = favoriteSong.querySelector('.remove-button');
//         removeButton.addEventListener('click', () => {
//             favoritesList.removeChild(favoriteSong);
//             removeSongFromStorage(title, src);
//         });
//     }

//     function removeSongFromStorage(title, src) {
//         let favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];
//         favoriteSongs = favoriteSongs.filter(song => !(song.title === title && song.src === src));
//         localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
//     }
// });
