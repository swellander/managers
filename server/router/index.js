const { Bannerman } = require('../db');
const router = require('express').Router();

router.get('/bannermen', (req, res, next) => {
  Bannerman.findAll()
    .then(bannermen => res.send(bannermen))
    .catch(next);
});

router.post('/bannermen', (req, res, next) => {
  Bannerman.create(req.body)
    .then(bannerman => res.json(bannerman))
    .catch(next)
})

router.get('/bannermen/:id', (req, res) => {
  Bannerman.findById(req.params.id)
    .then(bannerman => res.json(bannerman))
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete('/bannermen/:id', (req, res, next) => {
  Bannerman.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(202))
    .catch(err => res.status(500).send(err))
});

module.exports = router;
