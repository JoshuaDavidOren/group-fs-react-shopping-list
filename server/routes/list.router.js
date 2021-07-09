const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


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