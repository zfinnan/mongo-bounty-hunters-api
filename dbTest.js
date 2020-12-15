require('dotenv').config()

const models = require('./models')

// models.Bounty.create({
//     name: 'Yosemite Sam',
//     wantedFor: 'Rootin & tootin',
//     client: 'Walt Disney',
//     reward: 1000,
//     ship: 'good ship lollipop',
//     hunters: ['Bugs Bunny'],
//     captured: false,
//     lastSeen: '1982'
// })

models.Bounty.deleteMany().then(() => {
    console.log('done!');
})