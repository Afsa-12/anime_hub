const data = {
    'Action': [
        'Solo Leveling', 
        'Attack on Titan', 
        'Jujutsu Kaisen', 
        'Demon Slayer', 
        'Chainsaw Man', 
        'Naruto Shippuden', 
        'Bleach: TYBW', 
        'One Punch Man', 
        'Vinland Saga', 
        'Mob Psycho 100'
    ],
    'Adventure': [
        'One Piece', 
        'Hunter x Hunter', 
        'Fullmetal Alchemist: B', 
        'Dr. Stone', 
        'Magi: The Labyrinth of Magic', 
        'Fairy Tail', 
        'The Rising of the Shield Hero', 
        'JoJo’s Bizarre Adventure', 
        'Golden Kamuy', 
        'Made in Abyss'
    ],
    'Sci-Fi': [
        'Steins;Gate', 
        'Cowboy Bebop', 
        'Cyberpunk: Edgerunners', 
        'Neon Genesis Evangelion', 
        'Psycho-Pass', 
        'Code Geass', 
        '86 Eighty-Six', 
        'Ghost in the Shell', 
        'Vivy: Fluorite Eye\'s Song', 
        'Parasyte: The Maxim'
    ],
    'Fantasy': [
        'Frieren: Beyond Journey\'s End', 
        'That Time I Got Reincarnated as a Slime', 
        'Mushoku Tensei', 
        'Re:Zero', 
        'Black Clover', 
        'Overlord', 
        'Seven Deadly Sins', 
        'DanMachi', 
        'Fate/Stay Night', 
        'The Eminence in Shadow'
    ],
    'Romance': [
        'Horimiya', 
        'Kaguya-sama: Love is War', 
        'Your Lie in April', 
        'Toradora!', 
        'The Dangers in My Heart', 
        'Clannad: After Story', 
        'My Dress-Up Darling', 
        'Fruits Basket', 
        'Maid Sama!', 
        'Golden Time'
    ]
};

// --- Logic to display the list ---
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');

if (selectedGenre && data[selectedGenre]) {
    // Update the Heading
    document.getElementById('genre-heading').innerText = selectedGenre;
    
    const list = document.getElementById('anime-display');
    
    // Loop through the 10+ items and create list elements
    data[selectedGenre].forEach(anime => {
        const li = document.createElement('li');
        li.innerText = anime;
        list.appendChild(li);
    });
} else if (selectedGenre) {
    document.getElementById('genre-heading').innerText = "Genre Not Found";
}
