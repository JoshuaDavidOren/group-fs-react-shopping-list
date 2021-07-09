const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.post('/', (reqs, res) => {
    let newItem = req.body;
    console.log(`Attmepting to post ${newItem}`);
    let qText = `INSERT INTO "fs-react-shopping" ("name", "quantity", "unit", "isBought") VALUES ($1, $2, $3, $4);`;
    pool.query(qText, [newItem.name, newItem.quantity, newItem.unit, false])
    .then(res => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;