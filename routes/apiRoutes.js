const { Router, response } = require('express');
const fs = require('fs');
const notes = require('../db.json')
const path = require('path')


const router = Router();


router.get("/notes", (req, res) => {
    //'fs' to read file from db folder where users data is saved
    fs.readFile("db.json", "utf8", function (err, data) {
        data = [].concat(JSON.parse(data))

    })

    console.log(notes)
    return res.json(notes);

});


router.post('/notes', (request, response) => {
    let newNote = request.body;
    newNote.id = notes.length; // increments the notes by 1 - Allows up to automatically give and id number
    notes.push(newNote)

    console.log(request.body);
    console.log(notes);

    fs.writeFile("db.json", JSON.stringify(notes), function (err, data) {
        //  data = [].concat(JSON.stringify(data))
        if (err) {
            console.log(`Error: ${err}`)
        }

    })

})

router.delete('/notes/:id', (request, response) => {
    console.log("Request Parameter", request.params.id);


    const { id } = request.params;

    
     let deleted = notes.filter(notes => notes.id != id)

    for (let deleted = 0; deleted < deleted.length; deleted++) {
        console.log(deleted)
        
    }



    console.log('Deleted:', deleted)


    fs.readFile("db.json", "utf8", function (err, data) {
        data = [].concat(JSON.parse(data))

    })


    fs.writeFile("db.json", JSON.stringify(deleted), function (err, data) {
        //  data = [].concat(JSON.stringify(data))
        if (err) {
            console.log(`Error: ${err}`)
        }

    })
    response.send(200);

})

module.exports = router;



