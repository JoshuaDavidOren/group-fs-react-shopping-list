const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.put('/', (req,res) => {
    const itemId = req.params.id;
    const queryText = `UPDATE table SET "isBought"= !isBought WHERE id =$1;`;
    pool.query(queryText, [itemId])
    .then(response => {
        console.log('Response inside router.put'. response);
    }).catch(error => {
        console.log('error inside router.put', error);
    });
})



module.exports = router;