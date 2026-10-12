// Floating hearts animation
const heartsContainer = document.getElementById('hearts-container');
const heartSymbols = ['🤍', '💗', '💖', '💕', '❤️', '🌸', '✨'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    
    const size = Math.random() * 20 + 14;
    heart.style.fontSize = size + 'px';
    
    const duration = Math.random() * 8 + 6;
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 600);

for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 300);
}

// ========== MUSİQİ (local music.mp3) ==========
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🎵';
        musicBtn.classList.remove('playing');
        isPlaying = false;
    } else {
        bgMusic.volume = 0.8;
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    musicIcon.textContent = '🔊';
                    musicBtn.classList.add('playing');
                    isPlaying = true;
                })
                .catch(err => {
                    console.log('Musiqi oynadıla bilmədi:', err);
                    alert('Musiqi oynadıla bilmədi. Səhifəni yeniləyib yenidən yoxla.');
                });
        }
    }
});

// Loop artıq HTML-də loop atributu ilə təmin olunur
bgMusic.addEventListener('ended', () => {
    bgMusic.currentTime = 0;
    bgMusic.play();
});
