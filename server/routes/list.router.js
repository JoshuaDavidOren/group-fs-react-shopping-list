const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

<<<<<<< HEAD
router.put('/', (req,res) => {
    const itemId = req.params.id;
    const queryText = `UPDATE list SET "isBought"= !isBought WHERE id =$1;`;
    pool.query(queryText, [itemId])
    .then(response => {
        console.log('Response inside router.put'. response);
    }).catch(error => {
        console.log('error inside router.put', error);
    });
})


=======
router.post('/', (reqs, res) => {
    let newItem = req.body;
    console.log(`Attmepting to post ${newItem}`);
    let qText = `INSERT INTO "fs-react-shopping" ("name", quantity, "units", "isBought") VALUES ($1, $2, $3, $4);`;
    pool.query(qText, [newItem.name, newItem.quantity, newItem.units, false])
    .then(res => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})
>>>>>>> db282e57d78274b0e0d210476be4599064479c1d

module.exports = router;