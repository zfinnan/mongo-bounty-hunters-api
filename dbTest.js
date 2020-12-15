require('dotenv').config()

const models = require('./models')

models.Bounty.create({
  name: 'Yosemite Sam',
  wantedFor: 'Rootin & tootin',
  client: 'Walt Disney',
  reward: 1000,
  ship: 'good ship lollipop',
  hunters: [
    {
      name: 'Bugs Bunny',
      origin: 'Earth'
    }
  ],
  captured: false,
  lastSeen: '1982'
}).then(() => {console.log('done');})

// models.Bounty.deleteMany().then(() => {
//   console.log('done!');
// })