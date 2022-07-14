const { Router} = require('express');
 const fs = require('fs');
 const notes =require('../db.json')
console.log('these are the notes: ', notes)
// const store = require('store');

const router = Router();

router.get("/notes", (req, res) => {
  //'fs' to read file from db folder where users data is saved
    // fs.readFile("../db.json", "utf-8" , function(err, data) {
    //     // notes =[].concat(JSON.parse(data))
    //     console.log(data)
       
    // })
     res.json(notes);
//   return  store.getNotes()
  });


module.exports = router;



