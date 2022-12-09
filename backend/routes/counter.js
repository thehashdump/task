const express = require('express');
var fs = require('fs');

const router = express.Router();

router.post('/:value', async (req,res)=>{
    try {
        fs.writeFile('./fs/counter.txt', req.params.value, function(err) {
            console.log(err);
            res.json("success");
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (req,res)=>{
    try {
        fs.readFile('./fs/counter.txt','utf-8', function(err, data) {
            res.json({value: data});
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
