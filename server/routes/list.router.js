const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.put('/', (req, res) => {
    const itemId = req.params.id;
    const queryText = `UPDATE list SET "isBought"= !isBought WHERE id =$1;`;
    pool.query(queryText, [itemId])
        .then(response => {
            console.log('Response inside router.put'.response);
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


router.delete('/', (req, res) => {

    console.log(req.params);
    qText = `DELETE * FROM "list";`

    pool.query(qText)
        .then(dbResponse => {
            console.log('DELETEed list data');
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('DELETE list error', err);
            res.sendStatus(500);
        });
});

router.delete("/:id", (req, res) => {
    const deleteId = req.params.id;
    console.log(req.params);
    qText = `DELETE FROM "list" WHERE ID = $1;`;

    pool.query(qText, [deleteId])
        .then((dbResponse) => {
            console.log("DELETEed single item", { deleteID });
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("DELETE single item error", err);
            res.sendStatus(500);
        });
});



module.exports = router;