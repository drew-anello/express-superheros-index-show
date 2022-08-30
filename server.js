const express = require('express')
const app = express()
const port = 3000

const superHeros = ['Superman', 'Wonder Woman', 'Black Panther']

app.get('/superheros/', (req,res) => {
    res.send(superHeros)
})

app.listen(port, () => {
    console.log(`I'm working on port`, port)
})