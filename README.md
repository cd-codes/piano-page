# piano-page
---
This a personal project that takes inspiration from Web Dev Simplified's project JavaScript Piano on YouTube.
For this project, I would like to expand on the original idea:
1. Double the amount of notes available to play so that a tune that spans two octaves can be played
2. Add header text to the page
3. Incorporte modern styling elements on the page
4. Add a song-tutorial mode where a user can play a song
5. Incorporate validation for notes being played during the tutorial
6. Allow the user to reset the tutorial at any point
7. Auto-reset the tutorial when the tune has been completed
8. Add a footer with credits for the origianl project inspiration, the source for the note mp3 files and the song credits
9. Include a link to a YouTube video to hear what the song sounds like

Some challenges that I anticipate:
1. Choosing to implement the tutorial by note or by measure
2. Spacing the text elements on the page around the piano element
3. Testing the responsiveness of the page on a rotated mobile screen
---
UPDATE: After trying different algorithms to implement tutorial functionality on a feature branch, I coded in a bug that advances the tutorial in unintended ways. I am working on a solution and am planning to return to this functionality using React to manage the states of the keys rather than misuing recursion.
In the meantime, I will work on implementing a feature that highlights the keys to show how to play arpeggios in different keys.
