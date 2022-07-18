const { Router, response} = require('express');
 const fs = require('fs');
 const notes = require('../db.json')
 const path = require('path')
// console.log('these are the notes: ', notes)


const router = Router();

router.get("/notes", (req, res) => {
  //'fs' to read file from db folder where users data is saved
    fs.readFile("db.json", "utf8" , function(err, data) {
          data = [].concat(JSON.parse(data))
        
    })
    // res.sendFile(path.join(__dirname, 'db.json'));
  
    console.log(notes)
     return res.json(notes);

  });


  router.post('/notes',(request,response)=>{

    
  })
module.exports = router;



