const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.put('/item/:id', (req,res) => {
    const itemId = req.params.id;
    const itemStatus = req.body.isBought;
    const queryText = `UPDATE list SET "isBought"= !$1 WHERE id =$2;`;
    pool.query(queryText, [itemStatus, itemId])
    .then(response => {
        console.log('Response inside router.put', response);
    }).catch(error => {
        console.log('error inside router.put', error);
    });
})

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

module.exports = router;