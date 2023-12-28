let currentIndex = 0;
const artworks = [
    { title: 'Artwork 1', creator: 'Creator 1', imageSrc: 'artwork1.png', profile: 'profile1.png', description: 'This is a description of the artwork1' },
    { title: 'Artwork 2', creator: 'Creator 2', imageSrc: 'artwork2.jpg', profile: 'profile2.jpg', description: 'This is a description of the artwork2' },
    // Add more artworks as needed
];

function showPopup(index) {
    currentIndex = index;
    updatePopupContent();
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    updatePopupContent();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % artworks.length;
    updatePopupContent();
}

function updatePopupContent() {
    const currentArtwork = artworks[currentIndex];
    document.getElementById('popup-title').innerHTML = currentArtwork.title;
    document.getElementById('popup-creator').innerHTML = 'By ' + currentArtwork.creator;
    document.getElementById('popup-image').src = currentArtwork.imageSrc;
    document.getElementById('popup-profile').src = currentArtwork.profile;
    document.getElementById('popup-description').innerHTML = currentArtwork.description;
}

// Attach the showPopup function to the click event of each art piece
document.addEventListener('DOMContentLoaded', function() {
    const artPieces = document.querySelectorAll('.art-piece');
    artPieces.forEach(function(artPiece, index) {
        artPiece.addEventListener('click', function() {
            showPopup(index);
        });
    });
});
