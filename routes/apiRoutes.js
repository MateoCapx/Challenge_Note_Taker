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


  let testObject =
  [
    {
        "id": 2,
        "title":"Learn SQL",
        "text":"SQL Rocks"
    }
]

  router.post('/notes',(request,response)=>{
    console.log(request.body);
    fs.writeFile("db.json", JSON.stringify.push(testObject) , function(err, data) {
        // data = [].concat(JSON.stringify(data))
      if(err){
          console.log(`Error: ${err}`)
      }
  })
    response.send(201)
  });


module.exports = router;



// [
// 	{
// 		"id": 2,
// 		"title": " Devin Haney",
// 		"text": "Welterweight"
// 	}
// ]