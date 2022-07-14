const { Router} = require('express');
const fs = require('fs');

const router = Router();

router.get("/api/notes", (req, res) => {
    //'fs' to read file from db folder where users data is saved
    fs.readFile("/Users/Mateo/Desktop/GitHub/Challenge_Note_Taker/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
     
    });
  });
module.exports = router;

