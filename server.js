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
    {
        name: 'Lex Luthor',
        powers: ['Super Brain']
    },
    {
        name: 'Ares',
        powers: ['Shape shifting', 'teleporting']
    },
    {
        name: 'Kill Monger',
        powers: 'ability to fit in Black panthers suit'
    }

]

app.get('/superheros/', (req, res) => {
    res.send(superHeros)
})
app.get('/superheros/:indexOfSuperHeros', (req, res) => {
    res.send(superHeros[req.params.indexOfSuperHeros])
})
app.get('/villians/', (req, res) => {
    res.send(villians)
})
app.get('/villians/:indexOfVillans', (req, res) => {
    res.send(villians[req.params.indexOfVillans])
})
app.listen(port, () => {
    console.log(`I'm working on port`, port)
})