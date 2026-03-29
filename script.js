const data = {
    'Action': ['Solo Leveling', 'Naruto', 'Bleach'],
    'Adventure': ['One Piece', 'Hunter x Hunter', 'Dr. Stone'],
    'Sci-Fi': ['Neon Genesis Evangelion', 'Cyberpunk Edgerunners'],
    'Fantasy': ['Overlord', 'That Time I Got Reincarnated as a Slime'],
    'Romance': ['Horimiya', 'Kaguya-sama: Love is War', 'Your Lie in April']
};

// 1. Get the genre from the URL (?genre=Action)
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');

// 2. Display the data
if (selectedGenre && data[selectedGenre]) {
    document.getElementById('genre-heading').innerText = selectedGenre;
    
    const list = document.getElementById('anime-display');
    data[selectedGenre].forEach(anime => {
        const li = document.createElement('li');
        li.innerText = anime;
        list.appendChild(li);
    });
} else {
    document.getElementById('genre-heading').innerText = "Genre Not Found";
}
