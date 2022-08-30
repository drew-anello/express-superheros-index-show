const express = require('express')
const app = express()
const port = 3000

const superHeros = [
    {
        name: 'Superman',
        powers: ['flight', 'invulnerability', 'x-ray vision']

    },
    {
        name: 'Wonder Woman',
        powers: 'super strength'
    },
    {
        name: 'Black Panther',
        powers: 'being dope'
    }
]

const villians = [
    
]

app.get('/superheros/', (req, res) => {
    res.send(superHeros)
})
app.get('/superheros/:indexOfSuperHeros', (req, res) => {
    res.send(superHeros[req.params.indexOfSuperHeros])
})

app.listen(port, () => {
    console.log(`I'm working on port`, port)
})