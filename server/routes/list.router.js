const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM list`;
    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error QUERY GET`, error);
            res.sendStatus(500);
        });
});

module.exports = router;