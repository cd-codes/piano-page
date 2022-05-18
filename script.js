const keys = document.querySelectorAll('.key');
const SONG_NOTES = ["d3", "g3", "a-4", "d4", "d4", "c4", "a-4", "a4", "a-4",
     "g3", "a-4", "d4", "g4", "g4", "g4", "f4", "d-4", "f4",
     "a4", "d4", "f4", "a5", "g4", "f4", "e4", "f4", "g4", "f4", "e4",
     "d4", "c4", "a-4", "c4", "d4", "c4", "g3", "a4"];

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}