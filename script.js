const keys = document.querySelectorAll('.key');
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

chordButtons.forEach(button => {
    button.addEventListener('click', () => startTutorial(button));
})

reset.addEventListener('click', () => resetPiano());

/*  This function playNote() created by WebDevSimplified

    For a key, play the audio file associated with that key
    Start the audio file over each time key is clicked
    Key background-color changes while audio file is played  
    https://github.com/WebDevSimplified/JavaScript-Piano    */
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

/*  For a chord button, activate the reset button
    Call to getChordName() to get the array of notes
    Call to chordTutorial() to highlight the corresponding keys */
function startTutorial(button) {
    reset.classList.remove("unavailable");
    let chordName = getChordName(button.id);
    chordTutorial(chordName);
}

/*  For a chord name get the corresponding array of notes   */
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

/*  For an array of notes representing a chord,
    call to clearAllKeys() to remove highlight from any keys
    that remain highlighted.
    Iterate over array of notes and for each note,
    find the corresponding key, highlight that key,
    and call to showNote() to reveal the label.
    If the highlighted key is then clicked, remove the highlight,
    call to hideNote() to hide the label,
    call to unavailableReset()                                   */
function chordTutorial(chord) {
    clearAllKeys();
    chord.forEach(note => {
        keys.forEach(key => {
            if(key.dataset.note == note) {
                key.classList.add("note-highlight");
                showNote(key);
                key.addEventListener('click', () => {
                    key.classList.remove("note-highlight");
                    hideNote(key);
                    unavailableReset();
                })
            }
        })
    })
}

/*  Remove highlight from all keys.
    Call to hideNote() to hide all labels */
function clearAllKeys() {
    keys.forEach(key => {
        key.classList.remove("note-highlight");
        hideNote(key);
    })
}

/*  For a key, reveal the label  */
function showNote(key) {
    if (key.children.length > 0) {
        key.children[0].style.display = "block";
    }
}

/*  For a key, hide the label  */
function hideNote(key) {
    if (key.children.length > 0) {
        key.children[0].style.display = "none";
    }
}

/*  Check that all keys are not highlighted
    If true, make reset button unavailable */
function unavailableReset() {
    let flag = false;
    keys.forEach(key => {
        if(key.classList.contains("note-highlight")) {
            flag = true;
        }
    })
    if (!flag) {
        reset.classList.add("unavailable");
    }
}

/*  Call to clearAllKeys()
    Make reset button unavailable */
function resetPiano() {
    clearAllKeys();
    reset.classList.add("unavailable");
}