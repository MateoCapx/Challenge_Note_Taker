const router = require('express').Router();

router.get('/db.json' ,(request,response)=>{
    console.log(request.body)


})

module.exports = router;