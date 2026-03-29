const animeData = {
    'Action': ['Jujutsu Kaisen', 'Attack on Titan', 'Demon Slayer', 'One Punch Man'],
    'Adventure': ['One Piece', 'Hunter x Hunter', 'Fullmetal Alchemist', 'Vinland Saga'],
    'Sci-Fi': ['Steins;Gate', 'Cowboy Bebop', 'Psycho-Pass', 'Ghost in the Shell'],
    'Fantasy': ['Frieren: Beyond Journey\'s End', 'Black Clover', 'Mushoku Tensei', 'Re:Zero']
};

function showAnime(genre) {
    const listContainer = document.getElementById('anime-list');
    const titleContainer = document.getElementById('genre-title');
    
    // Clear previous list
    listContainer.innerHTML = '';
    
    // Update title
    titleContainer.innerText = `Top ${genre} Anime`;
    
    // Inject new items
    animeData[genre].forEach(anime => {
        const li = document.createElement('li');
        li.textContent = anime;
        listContainer.appendChild(li);
    });
}
