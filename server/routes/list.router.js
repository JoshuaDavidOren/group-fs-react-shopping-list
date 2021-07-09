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
    let qText = `INSERT INTO "fs-react-shopping" ("name", "quantity", "unit", "isBought") VALUES ($1, $2, $3, $4);`;
    pool.query(qText, [newItem.name, newItem.quantity, newItem.unit, false])
    .then(res => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
<<<<<<< HEAD
    });
});
=======
    })
})
>>>>>>> db282e57d78274b0e0d210476be4599064479c1d
>>>>>>> b4baa1e8071ac280b185f62fabdb6646409be5a3

module.exports = router;