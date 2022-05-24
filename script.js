const keys = document.querySelectorAll('.key');
// const SONG_NOTES = ["d3", "g3", "a-4", "d4", "d4", "c4", "a-4", "a4", "a-4",
//      "g3", "a-4", "d4", "g4", "g4", "g4", "f4", "d-4", "f4",
//      "a4", "d4", "f4", "a5", "g4", "f4", "e4", "f4", "g4", "f4", "e4",
//      "d4", "c4", "a-4", "c4", "d4", "c4", "g3", "a4"];
const chordButtons = document.querySelectorAll('.chord');
const reset = document.getElementById("reset-button");
const cMajor = ["c3", "e3", "g3", "c4"];
const gMajor = ["g3", "b4", "d4", "g4"];
const dMajor = ["d3", "f-3", "a4", "d4"];
const aMajor = ["a4", "c-4", "e4", "a5"];
const eMajor = ["e3", "g-3", "b4", "e4"];
const bMajor = ["b4", "d-4", "f-4", "b5"];
const fsMajor = ["f-3", "a-4", "c-4", "f-4"];
const csMajor = ["c-3", "f3", "g-3", "c-4"];
const afMajor = ["g-3", "c4", "d-4", "g-4"];
const efMajor = ["d-3", "g3", "a-4", "d-4"];
const bfMajor = ["a-4", "d4", "f4", "a-5"];
const fMajor = ["f3", "a4", "c4", "f4"];

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

function showNote(key) {
    if (key.children.length > 0) {
        key.children[0].style.display = "block";
    }
}

function hideNote(key) {
    if (key.children.length > 0) {
        key.children[0].style.display = "none";
    }
}

reset.addEventListener('click', () => clearAllKeys());

chordButtons.forEach(button => {
    button.addEventListener('click', () => startTutorial(button));
    // let chordName = getChordName(button.id);
    // chordTest(chordName);
})

function startTutorial(button) {
    let chordName = getChordName(button.id);
    chordTutorial(chordName);
}

function getChordName(chordName) {
    switch(chordName) {
        case "cMajor":
            return cMajor;
            break;
        case "gMajor":
            return gMajor;
            break;
        case "dMajor":
            return dMajor;
            break;
        case "aMajor":
            return aMajor;
            break;
        case "eMajor":
            return eMajor;
            break;
        case "bMajor":
            return bMajor;
            break;
        case "fsMajor":
            return fsMajor;
            break;
        case "csMajor":
            return csMajor;
            break;
        case "afMajor":
            return afMajor;
            break;
        case "efMajor":
            return efMajor;
            break;
        case "bfMajor":
            return bfMajor;
            break;
        case "fMajor":
            return fMajor;
            break;
    }
}

function chordTutorial(chord) {
    clearAllKeys();
    chord.forEach(note => {
        keys.forEach(key => {
            if(key.dataset.note == note) {
                key.classList.add("note-highlight");
                //show the note
                showNote(key);
                key.addEventListener('click', () => {
                    key.classList.remove("note-highlight");
                    hideNote(key);
                })
            }
        })
    })
}

function clearAllKeys() {
    keys.forEach(key => {
        key.classList.remove("note-highlight");
        hideNote(key);
    })
}

/*
user clicks on a chord button
the relevant keys highlight in green
as the user clicks a key, the highlight goes away
the user can click the reset keys button at the top to turn off all highlights
the user can click the same chord button again to rehighlight all the keys
the user can click any other chord button and the highlighted keys will switch to the keys for that chord
*/