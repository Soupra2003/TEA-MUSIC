let songIndex = 0;
let audioElement = new Audio('songs/Janam Janam.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongName = document.getElementById('mastersongName');
let masterSongCover = document.getElementById('masterSongCover');
let songItems = Array.from(document.getElementsByClassName('songItemplay'));
let gif = document.getElementById('gif');
let searchButton = document.getElementById('searchButton');
let searchInput = document.querySelector('.search-input');
let searchResults = document.getElementById('searchResults');
let searchPopup = document.getElementById('searchPopup');
let closePopup = document.querySelector('.close');


const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle("active");
}
const hamburger1 = document.querySelector('.hamburger1');
hamburger1.onclick = function() {
    const sidebar1 = document.querySelector('.sidebar1');
    sidebar1.classList.toggle("active");
}

let songs = [
    { songName: "Janam Janam - Arijit, Antra", filePath: "songs/Janam Janam.mp3", coverPath: "https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBnrDOWz/size_m.webp" },
    { songName: "Saware - Arijit Singh", filePath: "songs/Saware-Phantom.mp3", coverPath: "images/saware.jpeg" },
    { songName: "Tere Hawaale - Arijit Singh", filePath: "songs/tere hawale.mp3", coverPath: "images/tere hawale.jpg" },
    { songName: "Mast Magan - Arijit Singh", filePath: "songs/mast magan.mp3", coverPath: "images/mast magan.jpeg" },
    { songName: "Tum Hi Ho - Arijit Singh", filePath: "songs/tum hi ho.mp3", coverPath: "images/tum hi ho.jpeg" },
    { songName: "O Maahi - Arijit Singh", filePath: "songs/o mahhi.mp3", coverPath: "images/o mahhi.jpg" },
    { songName: "Chaleya - Arijit, Shilpa", filePath: "songs/chaleya.mp3", coverPath: "images/chaleya.jpeg" },
    { songName: "Ve Kamleya - Arijit, Shreya", filePath: "songs/ve kamleya.mp3", coverPath: "images/ve kamleya.jpeg" },
    { songName: "Pehli Dafa - Atif Aslam", filePath: "songs/pehli dafa.mp3", coverPath: "images/pehli dafa.jpeg" },
    { songName: "Main rahoon ya na rahoon - Armaan", filePath: "songs/main rahoon.mp3", coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp9gJrdklngLwqEpXhKNi_sKCyLwUfNkWYw&s" },
    { songName: "Soulmate - Arijit, Badshah", filePath: "songs/soulmate.mp3", coverPath: "https://pagalnew.com/coverimages/soulmate-ek-tha-raja-500-500.jpg" },
    { songName: "Tum Se - Raghav, Varun, Sachin", filePath: "songs/tum se.mp3", coverPath: "https://pagalnew.com/coverimages/tum-se-teri-baaton-mein-aisa-uljha-jiya-500-500.jpg" },
];

function togglePlay() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
    updateCardIcons();
}

function updateCardIcons() {
    songItems.forEach((element, index) => {
        const playIcon = element;
        if (playIcon) {
            if (index === songIndex) {
                if (audioElement.paused) {
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                } else {
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                }
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        }
    });
}

function playSong(index) {
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    mastersongName.innerText = songs[songIndex].songName;
    masterSongCover.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    updateCardIcons();
}

function playNextSong() {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSong(songIndex);
}

masterPlay.addEventListener('click', togglePlay);
masterPlay.addEventListener('touchend', (e) => {
    e.preventDefault();
    togglePlay();
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
    myprogressbar.style.background = `linear-gradient(to right, #219eb9 ${progress}%, #555 ${progress}%)`;
});

audioElement.addEventListener('ended', playNextSong);

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

songItems.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        if (songIndex === index) {
            if (audioElement.paused) {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
               
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                
            }
        } else {
            playSong(index);
        }
        updateCardIcons();
    });

    element.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (songIndex === index) {
            if (audioElement.paused) {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
              
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
               
            }
        } else {
            playSong(index);
        }
        updateCardIcons();
    });
});

document.getElementById('next').addEventListener('click', playNextSong);
document.getElementById('next').addEventListener('touchend', (e) => {
    e.preventDefault();
    playNextSong();
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    playSong(songIndex);
});

document.getElementById('previous').addEventListener('touchend', (e) => {
    e.preventDefault();
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    playSong(songIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    loginBtn.onclick = function() {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let songItem = document.getElementsByClassName('songItemplay');
    let Card = document.getElementsByClassName('card');

    songItem.addEventListener('play', function() {
        Card.classList.add('active');
    });

    songItem.addEventListener('pause', function() {
        Card.classList.remove('active');
    });

    songItem.addEventListener('ended', function() {
        Card.classList.remove('active');
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const signupButton = document.getElementById('signupButton');
//     const modal = document.getElementById('signUpModal');
//     const closeBtn = document.getElementsByClassName('close1')[0];

//     signupButton.onclick = function() {
//         modal.style.display = 'block';
//     }

//     closeBtn.onclick = function() {
//         modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// });

let clientId = '11048b032e844011b162a2bbfec2b669'; // Replace with your Client ID
let clientSecret = '30342fbf4b494b42ac1f849e1adcc8e4'; // Replace with your Client Secret
let token = '';

// Function to retrieve access token from Spotify API
async function getToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    token = data.access_token;
}

// Function to search for songs on Spotify API
async function searchSongs(query) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = await result.json();
    return data.tracks.items;
}

// Function to display search results from Spotify
function displaySearchResults(tracks) {
    searchResults.innerHTML = '';
    tracks.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${track.album.images[0].url}" alt="Song Cover" class="cover-img">
            <div class="card-body">
                <h5 class="song-title">${track.name}</h5>
                <p class="artist-name">${track.artists.map(artist => artist.name).join(', ')}</p>
                <button class="play-button songItemplay" data-preview-url="${track.preview_url}" id="searchPlayButton${index}"><i class="fa-solid fa-play"></i></button>
                <button class="love-button" data-preview-url="${track.preview_url}${index}"><i class="fa-solid fa-heart"></i></button>
            </div>
        `;
        searchResults.appendChild(card);

        const playButton = card.querySelector('.play-button');
        playButton.addEventListener('click', () => {
            if (audioElement.src === track.preview_url && !audioElement.paused) {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                updateSearchResultPlayButton();
            } else {
                playSpotifySong(track.preview_url, track.name, track.album.images[0].url);
            }
        });
    });
    
    searchPopup.style.display = 'block';
} 

// Function to update card icon (search result)
function updateSearchResultPlayButton() {
    const searchItemPlayButtons = document.querySelectorAll('.play-button');
    searchItemPlayButtons.forEach(button => {
        if (audioElement.src === button.dataset.previewUrl && !audioElement.paused) {
            button.innerHTML = '<i class="fa fa-pause"></i>';
        } else {
            button.innerHTML = '<i class="fa fa-play"></i>';
        }
    });
}

// Function to play Spotify song preview
function playSpotifySong(previewUrl, songName, coverPath) {
    audioElement.src = previewUrl;
    mastersongName.innerText = songName;
    masterSongCover.src = coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    updateSearchResultPlayButton();
}

// Event listener for search button
searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const tracks = await searchSongs(query);
    displaySearchResults(tracks);
});

// Event listener for closing the search popup
closePopup.addEventListener('click', () => {
    searchPopup.style.display = 'none';
});

// Initialization: Fetch access token on page load
document.addEventListener('DOMContentLoaded', async () => {
    await getToken();
});

const playButtons = document.querySelectorAll('.play-button .songItemplay');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-src');
        const iframe = document.getElementById('audioFrame');
        const iframeWindow = iframe.contentWindow;

        // Post message to iframe to change the audio source and play
        iframeWindow.postMessage({
            type: 'play',
            src: audioSrc
        }, '*');
    });
});

window.addEventListener('message', (event) => {
    if (event.data.type === 'play') {
        const audioElement = document.getElementById('audioElement');
        audioElement.src = event.data.src;
        audioElement.play();
    }
});


// function for add song to favourite list 

// document.addEventListener('DOMContentLoaded', () => {
//     const loveButtons = document.querySelectorAll('.love-button');

//     loveButtons.forEach(button => {  
//         button.addEventListener('click', () => {
//             const card = button.closest('.card');
//             const songTitle = card.querySelector('.song-title').textContent;
//             const artistName = card.querySelector('.artist-name').textContent;
//             const coverImg = card.querySelector('.cover-img').src;
//             const songSrc = `songs/${songTitle.replace(/\s/g, '_')}.mp3`; // Assuming the song's file name matches the song title with underscores instead of spaces

//             addSongToFavorites(songTitle, artistName, coverImg, songSrc);
//         });
//     });

//     function addSongToFavorites(title, artist, cover, src) {
//         const favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];
//         const songExists = favoriteSongs.some(song => song.title === title && song.src === src);

//         if (!songExists) {
//             favoriteSongs.push({ title, artist, cover, src });
//             localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
//             alert(`${title} added to favorites!`);
//         } else {
//             alert(`${title} is already in favorites!`);
//         }
//     }
// });


