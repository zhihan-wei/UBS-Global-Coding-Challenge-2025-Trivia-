const express = require('express');
const app = express();
const port = 3000;

app.get('/trivia', (req, res) => {
    const answers = [
        4, 
        1, 
        2, 
        2, 
        3, 
        4, // Universal Bureau of Surveillance
        2, // Operation Safeguard
        5, // Capture The Flag
        2, // Filler 1
        2, // Trading Formula
        2, // Filler (Encore)
        1, // Chase The Flag
        1, // Snakes and Ladders Power Up!
        1, // The Ink Archive
        2, // CoolCode Hacker
        1, // Fog-of-Wall
        1, // Filler 2
        3, // Duolingo Sorting
        3, // Sailing Club
        2, // The Mage's Gambit
        2, // 2048
        2, // Trading Bot
        3, // Micro-Mouse
        5, // Filler 3
        1  // Filler 4 (Last one)
    ];

    res.json({ answers });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});