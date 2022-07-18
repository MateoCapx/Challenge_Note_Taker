const path = require('path');
const router = require('express').Router();

//const { Router} = require('express');

// "/notes" responds with the notes.html file
router.get('/notes', (request, response) => {
response.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All other routes respond with the index.html file
router.get('*', (request, response) => {
response.sendFile(path.join(__dirname, '../public/index.html'));
 
});
module.exports = router;