const { Router} = require('express');
 const fs = require('fs');
// const store = require('store');

const router = Router();

router.get("/api/notes", (req, res) => {
  //'fs' to read file from db folder where users data is saved
    fs.readFile("/db.json", "utf-8").then(function(data) {
        notes =[].concat(JSON.parse(data))
        res.json(notes);
    })
//   return  store.getNotes()
  });


module.exports = router;



