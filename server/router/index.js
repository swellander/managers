const { User } = require('../db');
const router = require('express').Router();

router.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

router.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      res.status(500).send(err);
    });
})

module.exports = router;
