const router = require("express").Router();

const knex = require("./data/dbConfig.js");

router.get("/", (req, res) => {
  const query = req.query;
  console.log(query);
  knex("accounts")
    .orderBy(query.sortby)
    .limit(query.limit)
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500));
});

router.get("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .then(account => res.status(200).json(account))
    .catch(err => res.status(500));
});

router.post("/", (req, res) => {
  knex("accounts")
    .insert(req.body)
    .first()
    .then(number => res.status(200).json(number));
});

router.put("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(account => res.status(200).json(account))
    .catch(err => res.status(500));
});

router.delete("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .del()
    .then(number => res.status(200).json(number))
    .catch(err => res.status(500));
});

module.exports = router;
