const { User } = require('../db');
const router = require('express').Router();

router.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
})

module.exports = router;
