const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
  models.Bounty.find().then((foundBounties) => {
    res.status(200).json({ bounties: foundBounties })
  })
  .catch((error) => res.send({ error }))})

router.get('/:id', (req, res) => {
  models.Bounty.findOne({_id: req.params.id}).then((bounty) => {
    res.status(200).json({ bounty })
  })
  .catch((error) => res.send({ error }))})

router.post('/', (req, res) => {
  models.Bounty.create(req.body).then((bounty) => {
    res.status(201).json({ bounty })
  })
  .catch((error) => res.send({ error }))})

router.put('/:id', (req, res) => {
  // const wantedFor = req.body.wantedFor
  // const client = req.body.client
  // const reward = req.body.reward
  // const hunters = req.body.hunters
  // const captured = req.body.captured
  // const lastSeen = req.body.lastSeen
  
  const { wantedFor, client, reward, hunters, captured, lastSeen } = req.body
  
  models.Bounty.update({
    _id: req.params.id
  }, {$set: {
    wantedFor,
    client,
    reward,
    hunters,
    captured,
    lastSeen
  }})
  .then((bounty) => {
    res.status(201).json({ bounty })
  })
  .catch((error) => res.send({ error }))
})

router.delete('/:id', (req, res) => {
  models.Bounty.deleteOne({ _id: req.params.id })
  .then((bounty) => res.status(201).json({ bounty }))
  .catch((error) => res.send({ error }))
})

module.exports = router